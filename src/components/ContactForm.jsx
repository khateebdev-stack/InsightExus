"use client";

import { useState, useCallback } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useDropzone } from "react-dropzone";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/Button";
import { Bold, Italic, List, ListOrdered, Upload, X, Loader2, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const MenuBar = ({ editor }) => {
    if (!editor) {
        return null;
    }

    return (
        <div className="flex gap-2 p-2 border-b border-border bg-muted/30 rounded-t-lg">
            <button
                onClick={() => editor.chain().focus().toggleBold().run()}
                disabled={!editor.can().chain().focus().toggleBold().run()}
                className={`p-2 rounded hover:bg-background transition-colors ${editor.isActive("bold") ? "bg-background text-primary" : "text-muted-foreground"}`}
            >
                <Bold className="w-4 h-4" />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleItalic().run()}
                disabled={!editor.can().chain().focus().toggleItalic().run()}
                className={`p-2 rounded hover:bg-background transition-colors ${editor.isActive("italic") ? "bg-background text-primary" : "text-muted-foreground"}`}
            >
                <Italic className="w-4 h-4" />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                className={`p-2 rounded hover:bg-background transition-colors ${editor.isActive("bulletList") ? "bg-background text-primary" : "text-muted-foreground"}`}
            >
                <List className="w-4 h-4" />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                className={`p-2 rounded hover:bg-background transition-colors ${editor.isActive("orderedList") ? "bg-background text-primary" : "text-muted-foreground"}`}
            >
                <ListOrdered className="w-4 h-4" />
            </button>
        </div>
    );
};

export function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error'
    const [files, setFiles] = useState([]);

    const editor = useEditor({
        extensions: [StarterKit],
        content: "<p>Hi Insightexus team, I'm interested in...</p>",
        editorProps: {
            attributes: {
                class: "prose prose-invert max-w-none focus:outline-none min-h-[150px] p-4",
            },
        },
        immediatelyRender: false,
    });

    const onDrop = useCallback((acceptedFiles) => {
        setFiles((prev) => [
            ...prev,
            ...acceptedFiles.map((file) => Object.assign(file, {
                preview: URL.createObjectURL(file)
            }))
        ]);
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    const removeFile = (name) => {
        setFiles((files) => files.filter((file) => file.name !== name));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        const formData = new FormData(e.target);
        const name = formData.get("name");
        const email = formData.get("email");
        const message = editor.getHTML();

        // Prepare template params for EmailJS
        // Note: In a real app, you'd upload files to a storage bucket (AWS S3, Firebase) 
        // and send the links. EmailJS has a limit on attachment size (50KB for free tier).
        // For this demo, we'll just list the file names in the message.
        const fileNames = files.map(f => f.name).join(", ");

        const templateParams = {
            from_name: name,
            from_email: email,
            message: message,
            files: fileNames || "No files attached"
        };

        try {
            // REPLACE THESE WITH YOUR ACTUAL EMAILJS SERVICE ID, TEMPLATE ID, AND PUBLIC KEY
            // For now, we'll simulate a success after a delay
            // await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_PUBLIC_KEY');

            await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate network request

            console.log("Form Data:", templateParams);
            setSubmitStatus("success");
            editor.commands.setContent("<p>Message sent successfully!</p>");
            setFiles([]);
            e.target.reset();
        } catch (error) {
            console.error("Failed to send email:", error);
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-8 bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-muted-foreground">Name</label>
                    <input
                        required
                        type="text"
                        name="name"
                        id="name"
                        placeholder="John Doe"
                        className="w-full bg-background/50 border border-input rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-muted-foreground">Email</label>
                    <input
                        required
                        type="email"
                        name="email"
                        id="email"
                        placeholder="john@example.com"
                        className="w-full bg-background/50 border border-input rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Message</label>
                <div className="border border-input rounded-lg overflow-hidden bg-background/50 focus-within:ring-2 focus-within:ring-primary/50 transition-all">
                    <MenuBar editor={editor} />
                    <EditorContent editor={editor} />
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Attachments</label>
                <div
                    {...getRootProps()}
                    className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-colors ${isDragActive ? "border-primary bg-primary/5" : "border-muted-foreground/20 hover:border-primary/50 hover:bg-muted/50"
                        }`}
                >
                    <input {...getInputProps()} />
                    <div className="flex flex-col items-center gap-2 text-muted-foreground">
                        <Upload className="w-8 h-8 mb-2" />
                        <p className="text-sm font-medium">Drag & drop files here, or click to select</p>
                        <p className="text-xs">Supports images, PDF, DOCX (Max 10MB)</p>
                    </div>
                </div>

                <AnimatePresence>
                    {files.length > 0 && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                            {files.map((file) => (
                                <motion.div
                                    key={file.name}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    className="flex items-center gap-3 p-3 bg-muted rounded-lg border border-border group"
                                >
                                    <div className="w-10 h-10 rounded bg-background flex items-center justify-center text-xs font-bold uppercase border border-border">
                                        {file.name.split('.').pop()}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium truncate">{file.name}</p>
                                        <p className="text-xs text-muted-foreground">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={() => removeFile(file.name)}
                                        className="p-1 hover:bg-destructive/10 hover:text-destructive rounded transition-colors"
                                    >
                                        <X className="w-4 h-4" />
                                    </button>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </AnimatePresence>
            </div>

            <div className="flex items-center justify-between pt-4">
                {submitStatus === "success" && (
                    <p className="text-green-500 font-medium flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4" /> Message sent successfully!
                    </p>
                )}
                {submitStatus === "error" && (
                    <p className="text-destructive font-medium">Failed to send message. Please try again.</p>
                )}

                <Button
                    type="submit"
                    size="lg"
                    className="ml-auto min-w-[150px]"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? (
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

// Helper icon component since CheckCircle2 wasn't imported
function CheckCircle2(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="10" />
            <path d="m9 12 2 2 4-4" />
        </svg>
    )
}
