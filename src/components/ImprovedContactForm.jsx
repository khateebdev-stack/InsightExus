"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Loader2, Send, CheckCircle2 } from "lucide-react";
import { RichTextEditor } from "./RichTextEditor";
import { content } from "@/lib/content";

export function ImprovedContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isUploading, setIsUploading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        service: content.contact.form.options.services[0],
        budget: content.contact.form.options.budgets[0],
        message: ""
    });
    const [files, setFiles] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            setIsUploading(true);
            const fileDataPromises = files.map(file => {
                return new Promise((resolve, reject) => {
                    const reader = new FileReader();
                    reader.onload = () => {
                        const base64 = reader.result.split(',')[1];
                        resolve({
                            name: file.name,
                            type: file.type,
                            data: base64
                        });
                    };
                    reader.onerror = reject;
                    reader.readAsDataURL(file);
                });
            });

            const fileData = await Promise.all(fileDataPromises);
            setIsUploading(false);

            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject,
                    service: formData.service,
                    budget: formData.budget,
                    message: formData.message,
                    files: fileData
                }),
            });

            const data = await response.json();

            if (response.ok && data.success) {
                setSubmitStatus("success");
                setFormData({
                    name: "",
                    email: "",
                    subject: "",
                    service: content.contact.form.options.services[0],
                    budget: content.contact.form.options.budgets[0],
                    message: ""
                });
                setFiles([]);
            } else {
                console.error('Email sending failed:', data);
                setSubmitStatus("error");
            }
        } catch (error) {
            console.error("Failed to send email:", error);
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">Name *</label>
                    <input
                        required
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full bg-background border-2 border-muted-foreground/20 hover:border-primary/40 focus:border-primary rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base text-foreground placeholder:text-muted-foreground/50 focus:outline-none transition-colors"
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">Email *</label>
                    <input
                        required
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full bg-background border-2 border-muted-foreground/20 hover:border-primary/40 focus:border-primary rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base text-foreground placeholder:text-muted-foreground/50 focus:outline-none transition-colors"
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-foreground">Subject *</label>
                <input
                    required
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="What's your project about?"
                    className="w-full bg-background border-2 border-muted-foreground/20 hover:border-primary/40 focus:border-primary rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base text-foreground placeholder:text-muted-foreground/50 focus:outline-none transition-colors"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-medium text-foreground">Service Interest</label>
                    <select
                        id="service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-background border-2 border-muted-foreground/20 hover:border-primary/40 focus:border-primary rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base text-foreground focus:outline-none transition-colors appearance-none cursor-pointer"
                    >
                        {content.contact.form.options.services.map((option, i) => (
                            <option key={i} value={option}>{option}</option>
                        ))}
                    </select>
                </div>
                <div className="space-y-2">
                    <label htmlFor="budget" className="text-sm font-medium text-foreground">Estimated Budget</label>
                    <select
                        id="budget"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full bg-background border-2 border-muted-foreground/20 hover:border-primary/40 focus:border-primary rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base text-foreground focus:outline-none transition-colors appearance-none cursor-pointer"
                    >
                        {content.contact.form.options.budgets.map((option, i) => (
                            <option key={i} value={option}>{option}</option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Project Details *</label>
                <RichTextEditor
                    value={formData.message}
                    onChange={(html) => setFormData({ ...formData, message: html })}
                    onFilesChange={setFiles}
                />
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-4">
                <div className="flex-1 min-h-[24px]">
                    {submitStatus === "success" && (
                        <div className="flex items-start sm:items-center gap-2 text-green-500 font-medium text-sm">
                            <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 sm:mt-0" />
                            <span className="leading-tight">Message sent! Check your email for confirmation.</span>
                        </div>
                    )}
                    {submitStatus === "error" && (
                        <p className="text-destructive font-medium text-sm">Failed to send message. Please try again.</p>
                    )}
                </div>

                <Button
                    type="submit"
                    size="lg"
                    className="w-full sm:w-auto sm:min-w-[180px] whitespace-nowrap"
                    disabled={isSubmitting || isUploading}
                >
                    {isUploading ? (
                        <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Uploading...
                        </>
                    ) : isSubmitting ? (
                        <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Sending...
                        </>
                    ) : (
                        <>
                            Send Message <Send className="w-4 h-4 ml-2" />
                        </>
                    )}
                </Button>
            </div>
        </form>
    );
}
