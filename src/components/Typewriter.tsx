import { useState, useEffect } from "react";

const Typewriter = ({ texts, delay = 100, deleteDelay = 50, pauseDelay = 2000 }: { texts: string[]; delay?: number; deleteDelay?: number; pauseDelay?: number }) => {
    const [currentText, setCurrentText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [textIndex, setTextIndex] = useState(0);

    useEffect(() => {
        const currentFullText = texts[textIndex];

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                // Typing
                setCurrentText(currentFullText.substring(0, currentIndex + 1));
                setCurrentIndex((prev) => prev + 1);

                if (currentIndex === currentFullText.length) {
                    setTimeout(() => setIsDeleting(true), pauseDelay);
                }
            } else {
                // Deleting
                setCurrentText(currentFullText.substring(0, currentIndex - 1));
                setCurrentIndex((prev) => prev - 1);

                if (currentIndex === 0) {
                    setIsDeleting(false);
                    setTextIndex((prev) => (prev + 1) % texts.length);
                }
            }
        }, isDeleting ? deleteDelay : delay);

        return () => clearTimeout(timeout);
    }, [currentIndex, isDeleting, texts, textIndex, delay, deleteDelay, pauseDelay]);

    return <span>{currentText}</span>;
};

export default Typewriter;
