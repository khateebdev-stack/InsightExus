"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";

export function TypewriterEffect({ words, className, cursorClassName }) {
    const [index, setIndex] = useState(0);
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    // Typing speed
    const typeSpeed = 100;
    const deleteSpeed = 50;
    const delayBeforeDelete = 2000;
    const delayBeforeType = 500;

    useEffect(() => {
        const currentWord = words[index % words.length];

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                // Typing
                setText(currentWord.substring(0, text.length + 1));
                if (text.length === currentWord.length) {
                    setTimeout(() => setIsDeleting(true), delayBeforeDelete);
                }
            } else {
                // Deleting
                setText(currentWord.substring(0, text.length - 1));
                if (text.length === 0) {
                    setIsDeleting(false);
                    setIndex((prev) => prev + 1);
                }
            }
        }, isDeleting ? deleteSpeed : typeSpeed);

        return () => clearTimeout(timeout);
    }, [text, isDeleting, index, words]);

    return (
        <div className={className}>
            <span>{text}</span>
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                className={cursorClassName}
            >
                |
            </motion.span>
        </div>
    );
}
