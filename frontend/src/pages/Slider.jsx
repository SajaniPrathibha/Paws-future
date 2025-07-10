import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Slider.css';

function useTilt(animationDuration = '150ms') {
    const ref = useRef(null);

    useEffect(() => {
        if (!ref.current) return;

        const unify = (e) => (e.changedTouches ? e.changedTouches[0] : e);
        const state = { rect: undefined, mouseX: undefined, mouseY: undefined };
        let el = ref.current;

        const handleEnterEvent = () => {
            el.style.transition = `transform ${animationDuration} ease-out`;
        };

        const handleMoveEvent = (e) => {
            e.preventDefault();
            if (!el) return;
            if (!state.rect) state.rect = el.getBoundingClientRect();

            state.mouseX = unify(e).clientX;
            state.mouseY = unify(e).clientY;

            const px = (state.mouseX - state.rect.left) / state.rect.width;
            const py = (state.mouseY - state.rect.top) / state.rect.height;

            el.style.setProperty('--px', px.toFixed(2));
            el.style.setProperty('--py', py.toFixed(2));
        };

        const handleEndEvent = () => {
            el.style.setProperty('--px', 0.5);
            el.style.setProperty('--py', 0.5);
            el.style.transition = `transform ${animationDuration} ease-in`;
        };

        el.addEventListener('mouseenter', handleEnterEvent);
        el.addEventListener('mousemove', handleMoveEvent);
        el.addEventListener('mouseleave', handleEndEvent);
        el.addEventListener('touchstart', handleEnterEvent);
        el.addEventListener('touchmove', handleMoveEvent);
        el.addEventListener('touchend', handleEndEvent);

        return () => {
            el.removeEventListener('mouseenter', handleEnterEvent);
            el.removeEventListener('mousemove', handleMoveEvent);
            el.removeEventListener('mouseleave', handleEndEvent);
            el.removeEventListener('touchstart', handleEnterEvent);
            el.removeEventListener('touchmove', handleMoveEvent);
            el.removeEventListener('touchend', handleEndEvent);
        };
    }, [animationDuration]);

    return ref;
}

const Slide = ({ image, title, subtitle, description, offset, isPageBackground }) => {
    const active = offset === 0 ? true : null;
    const ref = useTilt(active);

    return (
        <div
            ref={ref}
            className="slide"
            data-active={active}
            style={{
                '--offset': offset,
                '--dir': offset === 0 ? 0 : offset > 0 ? 1 : -1,
            }}
        >
            {isPageBackground && (
                <div className="slideBackground" style={{ backgroundImage: `url('${image}')` }} />
            )}
            <div className="slideContent" style={{ backgroundImage: `url('${image}')` }}>
                <div className="slideContentInner">
                    {title && <h2 className="slideTitle" dir="auto">{title}</h2>}
                    {subtitle && <h3 className="slideSubtitle" dir="auto">{subtitle}</h3>}
                    {description && <p className="slideDescription" dir="auto">{description}</p>}
                </div>
            </div>
        </div>
    );
};

Slide.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    description: PropTypes.string,
    offset: PropTypes.number.isRequired,
    isPageBackground: PropTypes.bool,
};

const Slider = ({ slides, isPageBackground }) => {
    const [slideIndex, setSlideIndex] = useState(0);
    const sliderRef = useRef(null);
    const startX = useRef(0);
    const isDragging = useRef(false);

    const handleDragStart = (e) => {
        isDragging.current = true;
        startX.current = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
    };

    const handleDragEnd = (e) => {
        if (!isDragging.current) return;
        isDragging.current = false;

        const endX = e.type.includes('mouse') ? e.clientX : e.changedTouches[0].clientX;
        const diff = endX - startX.current;

        const threshold = 50;
        if (diff > threshold) {
            // swipe right
            setSlideIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
        } else if (diff < -threshold) {
            // swipe left
            setSlideIndex((prev) => (prev + 1) % slides.length);
        }
    };

    useEffect(() => {
        const el = sliderRef.current;
        if (!el) return;

        el.addEventListener('mousedown', handleDragStart);
        el.addEventListener('mouseup', handleDragEnd);
        el.addEventListener('touchstart', handleDragStart);
        el.addEventListener('touchend', handleDragEnd);

        return () => {
            el.removeEventListener('mousedown', handleDragStart);
            el.removeEventListener('mouseup', handleDragEnd);
            el.removeEventListener('touchstart', handleDragStart);
            el.removeEventListener('touchend', handleDragEnd);
        };
    }, []);

    return (
        <section className="slidesWrapper">
            <div className="slides" ref={sliderRef}>
                {[...slides, ...slides, ...slides].map((slide, i) => {
                    const offset = slides.length + (slideIndex - i);
                    return typeof slide === 'string' ? (
                        <Slide image={slide} offset={offset} isPageBackground={isPageBackground} key={i} />
                    ) : (
                        <Slide
                            key={i}
                            image={slide.image}
                            title={slide.title}
                            subtitle={slide.subtitle}
                            description={slide.description}
                            offset={offset}
                            isPageBackground={isPageBackground}
                        />
                    );
                })}
            </div>
        </section>
    );
};

Slider.propTypes = {
    slides: PropTypes.array.isRequired,
    isPageBackground: PropTypes.bool,
};

export default Slider;
