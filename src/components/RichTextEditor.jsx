"use client";

import { useState, useRef } from "react";
import { Bold, Italic, Underline, List, ListOrdered, Heading1, Heading2, X, Paperclip, Palette } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function RichTextEditor({ value, onChange, onFilesChange }) {
    const editorRef = useRef(null);
    const fileInputRef = useRef(null);
    const [attachments, setAttachments] = useState([]);
    const [showColorPicker, setShowColorPicker] = useState(false);
    const [activeFormats, setActiveFormats] = useState(new Set());

    const colors = [
        '#ffffff', '#000000', '#6366f1', '#8b5cf6', '#ef4444', '#f97316',
        '#eab308', '#22c55e', '#14b8a6', '#3b82f6', '#a855f7', '#ec4899'
    ];

    const updateActiveFormats = () => {
        const formats = new Set();
        if (document.queryCommandState('bold')) formats.add('bold');
        if (document.queryCommandState('italic')) formats.add('italic');
        if (document.queryCommandState('underline')) formats.add('underline');
        if (document.queryCommandState('insertUnorderedList')) formats.add('ul');
        if (document.queryCommandState('insertOrderedList')) formats.add('ol');
        setActiveFormats(formats);
    };

    const execCommand = (command, value = null) => {
        document.execCommand(command, false, value);
        editorRef.current?.focus();
        updateActiveFormats();
    };

    const applyColor = (color) => {
        execCommand('foreColor', color);
        setShowColorPicker(false);
    };

    const handleInput = () => {
        updateActiveFormats();
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

    const ToolbarButton = ({ icon: Icon, command, value, title, format }) => {
        const isActive = format && activeFormats.has(format);
        return (
            <button
                type="button"
                onClick={() => execCommand(command, value)}
                className={`p-2 rounded transition-colors ${isActive
                        ? 'bg-primary text-primary-foreground'
                        : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                    }`}
                title={title}
            >
                <Icon className="w-4 h-4" />
            </button>
        );
    };

    return (
        <div className="border border-input border-muted-foreground/20 hover:border-primary/40 focus-within:border-primary rounded-lg overflow-hidden bg-background focus-within:ring-2 focus-within:ring-primary/50 transition-all">
            {/* Toolbar */}
            <div className="flex items-center gap-1 p-2 border-b border-border bg-muted/30 flex-wrap relative">
                <ToolbarButton icon={Bold} command="bold" title="Bold (Ctrl+B)" format="bold" />
                <ToolbarButton icon={Italic} command="italic" title="Italic (Ctrl+I)" format="italic" />
                <ToolbarButton icon={Underline} command="underline" title="Underline (Ctrl+U)" format="underline" />
                <div className="w-px h-6 bg-border mx-1" />
                <ToolbarButton icon={Heading1} command="formatBlock" value="h3" title="Heading 1" />
                <ToolbarButton icon={Heading2} command="formatBlock" value="h4" title="Heading 2" />
                <div className="w-px h-6 bg-border mx-1" />
                <ToolbarButton icon={List} command="insertUnorderedList" title="Bullet List" format="ul" />
                <ToolbarButton icon={ListOrdered} command="insertOrderedList" title="Numbered List" format="ol" />
                <div className="w-px h-6 bg-border mx-1" />

                {/* Color Picker */}
                <div className="relative">
                    <button
                        type="button"
                        onClick={() => setShowColorPicker(!showColorPicker)}
                        className="p-2 rounded hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
                        title="Text Color"
                    >
                        <Palette className="w-4 h-4" />
                    </button>
                    {showColorPicker && (
                        <div className="absolute top-full left-0 mt-2 p-2 bg-background border border-border rounded-lg shadow-xl z-10 grid grid-cols-6 gap-1 w-48">
                            {colors.map(color => (
                                <button
                                    key={color}
                                    type="button"
                                    onClick={() => applyColor(color)}
                                    className="w-6 h-6 rounded border border-border hover:scale-110 transition-transform"
                                    style={{ backgroundColor: color }}
                                    title={color}
                                />
                            ))}
                        </div>
                    )}
                </div>

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

            {/* Editor with live styles */}
            <div
                ref={editorRef}
                contentEditable
                onInput={handleInput}
                onPaste={handlePaste}
                onDrop={handleDrop}
                onDragOver={(e) => e.preventDefault()}
                onMouseUp={updateActiveFormats}
                onKeyUp={updateActiveFormats}
                className="min-h-[200px] p-4 text-foreground focus:outline-none prose prose-invert max-w-none"
                style={{ lineHeight: "1.6" }}
                suppressContentEditableWarning
            />

            {/* CSS Styles - Applied inline for live rendering */}
            <style jsx global>{`
                [contenteditable] {
                    outline: none;
                }
                [contenteditable] h3 {
                    font-size: 1.5rem;
                    font-weight: bold;
                    margin: 1rem 0;
                    color: hsl(var(--primary));
                }
                [contenteditable] h4 {
                    font-size: 1.25rem;
                    font-weight: bold;
                    margin: 0.75rem 0;
                    color: hsl(var(--primary));
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
                [contenteditable] strong, [contenteditable] b {
                    font-weight: bold;
                }
                [contenteditable] em, [contenteditable] i {
                    font-style: italic;
                }
                [contenteditable] u {
                    text-decoration: underline;
                }
            `}</style>

            {/* Attachments */}
            <AnimatePresence>
                {attachments.length > 0 && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="border-t border-border bg-muted/20 p-3"
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
                                    className="flex items-center gap-2 p-2 bg-background rounded border border-border group"
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
            <div className="p-2 text-center text-xs text-muted-foreground border-t border-border bg-muted/10">
                Drop files here or click the <Paperclip className="w-3 h-3 inline" /> button to attach
            </div>
        </div>
    );
}
