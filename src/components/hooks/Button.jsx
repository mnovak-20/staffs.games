import clsx from "clsx";

const Button = ({ id, title, rightIcon, leftIcon, containerClass, href, target, onClick }) => {
    const commonClassNames = clsx(
        "inline-flex group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full text-black",
        containerClass
    );

    const content = (
        <>
            <div className= "content-center" >
                     {leftIcon}
                 </div>
            <span className="relative inline-flex overflow-hidden font-general uppercase">
                <div className="translate-y-0 skew-y-0 transition duration-1000 group-hover:translate-y-[-200%] group-hover:-skew-y-12">
                    {title}
                </div>
                <div className="absolute translate-y-[200%] -skew-y-12 transition duration-1000 group-hover:translate-y-0 group-hover:skew-y-0">
                    {title}
                </div>
            </span>
            {rightIcon}
        </>
    );

    return href ? (
        <a
            id={id}
            href={href}
            target={target}
            className={commonClassNames}
            rel={target === "_blank" ? "noopener noreferrer" : undefined}
        >
            {content}
        </a>
    ) : (
        <button
            id={id}
            className={commonClassNames}
            onClick={onClick}

        >
            {content}
        </button>
    );
};

export default Button;
