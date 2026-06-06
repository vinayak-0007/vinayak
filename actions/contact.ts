"use server";

import { z } from "zod";
import { supabase } from "@/lib/supabase";
import { resend } from "@/lib/resend";

const contactSchema = z.object({
    firstName: z.string().min(1, "First name is required").max(50),
    lastName: z.string().min(1, "Last name is required").max(50),
    email: z.string().email("Please enter a valid email address"),
    message: z.string().min(10, "Message must be at least 10 characters").max(2000),
});

export type ContactFormState = {
    success: boolean;
    message: string;
    errors?: {
        firstName?: string[];
        lastName?: string[];
        email?: string[];
        message?: string[];
    };
};

export async function submitContactForm(
    _prevState: ContactFormState,
    formData: FormData
): Promise<ContactFormState> {
    // Validate form data
    const validatedFields = contactSchema.safeParse({
        firstName: formData.get("firstName"),
        lastName: formData.get("lastName"),
        email: formData.get("email"),
        message: formData.get("message"),
    });

    if (!validatedFields.success) {
        return {
            success: false,
            message: "Please fix the errors below.",
            errors: validatedFields.error.flatten().fieldErrors,
        };
    }

    const { firstName, lastName, email, message } = validatedFields.data;

    try {
        // Store in Supabase
        const { error: dbError } = await supabase.from("contact_messages").insert({
            first_name: firstName,
            last_name: lastName,
            email,
            message,
        });

        if (dbError) {
            console.error("Supabase insert error:", dbError);
            return {
                success: false,
                message: "Failed to save your message. Please try again.",
            };
        }

        // Send notification email via Resend
        const { error: emailError } = await resend.emails.send({
            from: "Portfolio Contact <onboarding@resend.dev>",
            to: process.env.CONTACT_TO_EMAIL || "vinayakkashyap149@gmail.com",
            subject: `New Contact Form Message from ${firstName} ${lastName}`,
            html: `
                <div style="font-family: 'Inter', sans-serif; max-width: 600px; margin: 0 auto; background: #0f1117; color: #e2e8f0; border-radius: 12px; overflow: hidden;">
                    <div style="background: linear-gradient(135deg, #06b6d4, #8b5cf6); padding: 24px 32px;">
                        <h1 style="margin: 0; font-size: 22px; color: white;">New Contact Form Submission</h1>
                    </div>
                    <div style="padding: 32px;">
                        <div style="margin-bottom: 20px;">
                            <p style="color: #94a3b8; font-size: 13px; margin: 0 0 4px;">NAME</p>
                            <p style="margin: 0; font-size: 16px; font-weight: 600;">${firstName} ${lastName}</p>
                        </div>
                        <div style="margin-bottom: 20px;">
                            <p style="color: #94a3b8; font-size: 13px; margin: 0 0 4px;">EMAIL</p>
                            <p style="margin: 0; font-size: 16px;"><a href="mailto:${email}" style="color: #06b6d4; text-decoration: none;">${email}</a></p>
                        </div>
                        <div style="margin-bottom: 20px;">
                            <p style="color: #94a3b8; font-size: 13px; margin: 0 0 4px;">MESSAGE</p>
                            <div style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; padding: 16px;">
                                <p style="margin: 0; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
                            </div>
                        </div>
                        <hr style="border: none; border-top: 1px solid rgba(255,255,255,0.1); margin: 24px 0;" />
                        <p style="color: #64748b; font-size: 12px; margin: 0;">Sent from your portfolio contact form</p>
                    </div>
                </div>
            `,
        });

        if (emailError) {
            console.error("Resend email error:", emailError);
            // Don't fail — message is already saved in Supabase
        }

        return {
            success: true,
            message: "Thank you! Your message has been sent successfully. I'll get back to you soon.",
        };
    } catch (error) {
        console.error("Contact form error:", error);
        return {
            success: false,
            message: "Something went wrong. Please try again later.",
        };
    }
}
