"use client";

import { useState, useRef, useCallback } from "react";
import { Bold, Italic, Underline, List, ListOrdered, Heading1, Heading2, Image as ImageIcon, X, Paperclip } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function RichTextEditor({ value, onChange, onFilesChange }) {
    const editorRef = useRef(null);
    const fileInputRef = useRef(null);
    const [attachments, setAttachments] = useState([]);

    const execCommand = (command, value = null) => {
        document.execCommand(command, false, value);
        editorRef.current?.focus();
    };

    const handleInput = () => {
        if (onChange) {
            onChange(editorRef.current?.innerHTML || "");
        }
    };

    const handlePaste = (e) => {
        e.preventDefault();
        const text = e.clipboardData.getData("text/plain");
        document.execCommand("insertText", false, text);
    };

    const handleFileSelect = (e) => {
        const files = Array.from(e.target.files || []);
        addFiles(files);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const files = Array.from(e.dataTransfer.files);
        addFiles(files);
    };

    const addFiles = (files) => {
        const newAttachments = files.map(file => ({
            file,
            name: file.name,
            size: file.size,
            type: file.type,
            id: Math.random().toString(36).substr(2, 9)
        }));

        const updated = [...attachments, ...newAttachments];
        setAttachments(updated);

        if (onFilesChange) {
            onFilesChange(updated.map(a => a.file));
        }
    };

    const removeFile = (id) => {
        const updated = attachments.filter(a => a.id !== id);
        setAttachments(updated);

        if (onFilesChange) {
            onFilesChange(updated.map(a => a.file));
        }
    };

    const ToolbarButton = ({ icon: Icon, command, value, title }) => (
        <button
            type="button"
            onClick={() => execCommand(command, value)}
            className="p-2 rounded hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
            title={title}
        >
            <Icon className="w-4 h-4" />
        </button>
    );

    return (
        <div className="border border-input border-muted-foreground/20 hover:border-primary/40 focus:border-primary rounded-lg overflow-hidden bg-background focus-within:ring-2 focus-within:ring-primary/50 transition-all">
            {/* Toolbar */}
            <div className="flex items-center gap-1 p-2 border-b border-border border-muted-foreground/20 hover:border-primary/40 focus:border-primary bg-muted/30 flex-wrap">
                <ToolbarButton icon={Bold} command="bold" title="Bold (Ctrl+B)" />
                <ToolbarButton icon={Italic} command="italic" title="Italic (Ctrl+I)" />
                <ToolbarButton icon={Underline} command="underline" title="Underline (Ctrl+U)" />
                <div className="w-px h-6 bg-border mx-1" />
                <ToolbarButton icon={Heading1} command="formatBlock" value="h3" title="Heading 1" />
                <ToolbarButton icon={Heading2} command="formatBlock" value="h4" title="Heading 2" />
                <div className="w-px h-6 bg-border mx-1" />
                <ToolbarButton icon={List} command="insertUnorderedList" title="Bullet List" />
                <ToolbarButton icon={ListOrdered} command="insertOrderedList" title="Numbered List" />
                <div className="w-px h-6 bg-border mx-1" />
                <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="p-2 rounded hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
                    title="Attach Files"
                >
                    <Paperclip className="w-4 h-4" />
                </button>
                <input
                    ref={fileInputRef}
                    type="file"
                    multiple
                    onChange={handleFileSelect}
                    className="hidden"
                    accept="image/*,.pdf,.doc,.docx,.txt"
                />
            </div>

            {/* Editor */}
            <div
                ref={editorRef}
                contentEditable
                onInput={handleInput}
                onPaste={handlePaste}
                onDrop={handleDrop}
                onDragOver={(e) => e.preventDefault()}
                className="min-h-[200px] p-4 text-foreground focus:outline-none"
                style={{
                    lineHeight: "1.6",
                }}
            >
                {/* Styled content area */}
                <style jsx>{`
                    [contenteditable] h3 {
                        font-size: 1.5rem;
                        font-weight: bold;
                        margin: 1rem 0;
                        color: var(--primary);
                    }
                    [contenteditable] h4 {
                        font-size: 1.25rem;
                        font-weight: bold;
                        margin: 0.75rem 0;
                        color: var(--primary);
                    }
                    [contenteditable] ul {
                        list-style-type: disc;
                        padding-left: 2rem;
                        margin: 0.5rem 0;
                    }
                    [contenteditable] ol {
                        list-style-type: decimal;
                        padding-left: 2rem;
                        margin: 0.5rem 0;
                    }
                    [contenteditable] li {
                        margin: 0.25rem 0;
                    }
                    [contenteditable] strong {
                        font-weight: bold;
                    }
                    [contenteditable] em {
                        font-style: italic;
                    }
                    [contenteditable] u {
                        text-decoration: underline;
                    }
                `}</style>
            </div>

            {/* Attachments */}
            <AnimatePresence>
                {attachments.length > 0 && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="border-t border-border border-muted-foreground/20 hover:border-primary/40 focus:border-primary bg-muted/20 p-3"
                    >
                        <div className="flex items-center gap-2 mb-2 text-xs text-muted-foreground">
                            <Paperclip className="w-3 h-3" />
                            <span>{attachments.length} file{attachments.length !== 1 ? 's' : ''} attached</span>
                        </div>
                        <div className="grid grid-cols-1 gap-2">
                            {attachments.map((attachment) => (
                                <motion.div
                                    key={attachment.id}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    className="flex items-center gap-2 p-2 bg-background rounded border border-border border-muted-foreground/20 hover:border-primary/40 focus:border-primary group"
                                >
                                    <div className="w-8 h-8 flex-shrink-0 rounded bg-primary/10 flex items-center justify-center text-xs font-bold uppercase border border-primary/20 text-primary">
                                        {attachment.name.split('.').pop()}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium truncate">{attachment.name}</p>
                                        <p className="text-xs text-muted-foreground">{(attachment.size / 1024).toFixed(1)} KB</p>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={() => removeFile(attachment.id)}
                                        className="p-1.5 hover:bg-destructive/10 hover:text-destructive rounded transition-colors flex-shrink-0 opacity-100 md:opacity-0 md:group-hover:opacity-100"
                                        aria-label="Remove file"
                                    >
                                        <X className="w-4 h-4" />
                                    </button>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Drop Zone Hint */}
            <div className="p-2 text-center text-xs text-muted-foreground border-t border-border border-muted-foreground/20  bg-muted/10">
                Drop files here or click the <Paperclip className="w-3 h-3 inline" /> button to attach
            </div>
        </div>
    );
}
