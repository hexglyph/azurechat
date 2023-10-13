type IconProps = React.HTMLAttributes<SVGElement>

export const Icons = {
    logo: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
            <rect width="256" height="256" fill="none" />
            <line
                x1="208"
                y1="128"
                x2="128"
                y2="208"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
            />
            <line
                x1="192"
                y1="40"
                x2="40"
                y2="192"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
            />
        </svg>
    ),
    microsoft: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48">
            <path fill="#ff5722" d="M6 6H22V22H6z" transform="rotate(-180 14 14)"></path><path fill="#4caf50" d="M26 6H42V22H26z" transform="rotate(-180 34 14)"></path><path fill="#ffc107" d="M26 26H42V42H26z" transform="rotate(-180 34 34)"></path><path fill="#03a9f4" d="M6 26H22V42H6z" transform="rotate(-180 14 34)"></path>
        </svg>
    ),
    twitter: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <path d="M21.543 7.104c.015.211.015.423.015.636 0 6.507-4.954 14.01-14.01 14.01v-.003A13.94 13.94 0 0 1 0 19.539a9.88 9.88 0 0 0 7.287-2.041 4.93 4.93 0 0 1-4.6-3.42 4.916 4.916 0 0 0 2.223-.084A4.926 4.926 0 0 1 .96 9.167v-.062a4.887 4.887 0 0 0 2.235.616A4.928 4.928 0 0 1 1.67 3.148a13.98 13.98 0 0 0 10.15 5.144 4.929 4.929 0 0 1 8.39-4.49 9.868 9.868 0 0 0 3.128-1.196 4.941 4.941 0 0 1-2.165 2.724A9.828 9.828 0 0 0 24 4.555a10.019 10.019 0 0 1-2.457 2.549z" />
        </svg>
    ),
    gitHub: (props: IconProps) => (
        <svg viewBox="0 0 438.549 438.549" {...props}>
            <path
                fill="currentColor"
                d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
            ></path>
        </svg>
    ),
    radix: (props: IconProps) => (
        <svg viewBox="0 0 25 25" fill="none" {...props}>
            <path
                d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z"
                fill="currentcolor"
            ></path>
            <path d="M12 0H4V8H12V0Z" fill="currentcolor"></path>
            <path
                d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"
                fill="currentcolor"
            ></path>
        </svg>
    ),
    aria: (props: IconProps) => (
        <svg role="img" viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M13.966 22.624l-1.69-4.281H8.122l3.892-9.144 5.662 13.425zM8.884 1.376H0v21.248zm15.116 0h-8.884L24 22.624Z" />
        </svg>
    ),
    npm: (props: IconProps) => (
        <svg viewBox="0 0 24 24" {...props}>
            <path
                d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.113z"
                fill="currentColor"
            />
        </svg>
    ),
    yarn: (props: IconProps) => (
        <svg viewBox="0 0 24 24" {...props}>
            <path
                d="M12 0C5.375 0 0 5.375 0 12s5.375 12 12 12 12-5.375 12-12S18.625 0 12 0zm.768 4.105c.183 0 .363.053.525.157.125.083.287.185.755 1.154.31-.088.468-.042.551-.019.204.056.366.19.463.375.477.917.542 2.553.334 3.605-.241 1.232-.755 2.029-1.131 2.576.324.329.778.899 1.117 1.825.278.774.31 1.478.273 2.015a5.51 5.51 0 0 0 .602-.329c.593-.366 1.487-.917 2.553-.931.714-.009 1.269.445 1.353 1.103a1.23 1.23 0 0 1-.945 1.362c-.649.158-.95.278-1.821.843-1.232.797-2.539 1.242-3.012 1.39a1.686 1.686 0 0 1-.704.343c-.737.181-3.266.315-3.466.315h-.046c-.783 0-1.214-.241-1.45-.491-.658.329-1.51.19-2.122-.134a1.078 1.078 0 0 1-.58-1.153 1.243 1.243 0 0 1-.153-.195c-.162-.25-.528-.936-.454-1.946.056-.723.556-1.367.88-1.71a5.522 5.522 0 0 1 .408-2.256c.306-.727.885-1.348 1.32-1.737-.32-.537-.644-1.367-.329-2.21.227-.602.412-.936.82-1.08h-.005c.199-.074.389-.153.486-.259a3.418 3.418 0 0 1 2.298-1.103c.037-.093.079-.185.125-.283.31-.658.639-1.029 1.024-1.168a.94.94 0 0 1 .328-.06zm.006.7c-.507.016-1.001 1.519-1.001 1.519s-1.27-.204-2.266.871c-.199.218-.468.334-.746.44-.079.028-.176.023-.417.672-.371.991.625 2.094.625 2.094s-1.186.839-1.626 1.881c-.486 1.144-.338 2.261-.338 2.261s-.843.732-.899 1.487c-.051.663.139 1.2.343 1.515.227.343.51.176.51.176s-.561.653-.037.931c.477.25 1.283.394 1.71-.037.31-.31.371-1.001.486-1.283.028-.065.12.111.209.199.097.093.264.195.264.195s-.755.324-.445 1.066c.102.246.468.403 1.066.398.222-.005 2.664-.139 3.313-.296.375-.088.505-.283.505-.283s1.566-.431 2.998-1.357c.917-.598 1.293-.76 2.034-.936.612-.148.57-1.098-.241-1.084-.839.009-1.575.44-2.196.825-1.163.718-1.742.672-1.742.672l-.018-.032c-.079-.13.371-1.293-.134-2.678-.547-1.515-1.413-1.881-1.344-1.997.297-.5 1.038-1.297 1.334-2.78.176-.899.13-2.377-.269-3.151-.074-.144-.732.241-.732.241s-.616-1.371-.788-1.483a.271.271 0 0 0-.157-.046z"
                fill="currentColor"
            />
        </svg>
    ),
    pnpm: (props: IconProps) => (
        <svg viewBox="0 0 24 24" {...props}>
            <path
                d="M0 0v7.5h7.5V0zm8.25 0v7.5h7.498V0zm8.25 0v7.5H24V0zM8.25 8.25v7.5h7.498v-7.5zm8.25 0v7.5H24v-7.5zM0 16.5V24h7.5v-7.5zm8.25 0V24h7.498v-7.5zm8.25 0V24H24v-7.5z"
                fill="currentColor"
            />
        </svg>
    ),
    react: (props: IconProps) => (
        <svg viewBox="0 0 24 24" {...props}>
            <path
                d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"
                fill="currentColor"
            />
        </svg>
    ),
    tailwind: (props: IconProps) => (
        <svg viewBox="0 0 24 24" {...props}>
            <path
                d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"
                fill="currentColor"
            />
        </svg>
    ),
    google: (props: IconProps) => (
        <svg role="img" viewBox="0 0 24 24" {...props}>
            <path
                fill="currentColor"
                d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
            />
        </svg>
    ),
    apple: (props: IconProps) => (
        <svg role="img" viewBox="0 0 24 24" {...props}>
            <path
                d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"
                fill="currentColor"
            />
        </svg>
    ),
    paypal: (props: IconProps) => (
        <svg role="img" viewBox="0 0 24 24" {...props}>
            <path
                d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 0 0 .554.647h3.882c.46 0 .85-.334.922-.788.06-.26.76-4.852.816-5.09a.932.932 0 0 1 .923-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.777-4.471z"
                fill="currentColor"
            />
        </svg>
    ),
    spinner: (props: IconProps) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <path d="M21 12a9 9 0 1 1-6.219-8.56" />
        </svg>
    ),
    prodamia: (props: IconProps) => (
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="256" height="256" viewBox="0 0 128 128"><path fill="#05192e" d="M99.28,64c.34-1.08.79-2.12,1.18-3.18,1.05-2.84,2.21-5.64,3.15-8.51a14.87,14.87,0,0,0,.88-5.24,7.56,7.56,0,0,0-2.25-5.4,9.41,9.41,0,0,0-4.44-2.2A20.41,20.41,0,0,0,93.13,39h-3.2a.45.45,0,0,1-.46-.27,21.82,21.82,0,0,0-7-7.29,12.45,12.45,0,0,0-4.11-1.65A4.09,4.09,0,0,1,76.65,29a.4.4,0,0,0-.43,0c-.14.06-.06.21-.06.31s0,.4,0,.6a.54.54,0,0,1-.38.52c-.38.13-.39.29-.09.53a.82.82,0,0,0,1.2.05l.08-.06c.43-.55.93-.5,1.51-.24a11.91,11.91,0,0,0,1.46.49,11.23,11.23,0,0,1,3.54,2.17,21.51,21.51,0,0,1,4.82,5.25l.18.3c-.09.1-.19.05-.28.05H81.81c-.27,0-.37,0-.27-.32a3.37,3.37,0,0,1,.09-.34c.22-.38,0-.58-.28-.76a1.83,1.83,0,0,0-.73-.32c-.2,0-.44-.14-.57.11a.6.6,0,0,0,0,.75,1.44,1.44,0,0,1,.32.58c.07.22,0,.3-.23.3H70.63c-.25,0-.33,0-.33-.32,0-1.72,0-3.44,0-5.17a2.1,2.1,0,0,1,.26-1.22c0-.07.08-.13,0-.2A1.75,1.75,0,0,0,69,31.5c-.4.09-.52.33-.26.64a2.42,2.42,0,0,1,.5,1.71c0,1.61,0,3.21,0,4.82,0,.25-.08.3-.32.3H62.23a.48.48,0,0,1-.4-.16c-.15-.17-.38-.22-.49,0s-.14.1-.23.1c-.89,0-1.78,0-2.67,0-.27,0-.23-.15-.23-.31q0-3.45,0-6.92a.93.93,0,0,0-.61-1,.52.52,0,0,0-.54.86.4.4,0,0,1,.17.35c0,2.25,0,4.49,0,6.74,0,.19-.05.24-.23.24a27.33,27.33,0,0,0-3.51.11c-.25,0-.17-.14-.17-.25,0-.82,0-1.64,0-2.46A9.94,9.94,0,0,0,53.2,35c0-.26-.16-.27-.36-.19a.77.77,0,0,0-.5.93,5.64,5.64,0,0,1,.14,1.87c0,.4,0,.8,0,1.2s-.11.41-.39.46a7.78,7.78,0,0,0-2.82,1.09,7.92,7.92,0,0,0-1.67,1.49.46.46,0,0,1-.39.18c-1.65,0-3.3,0-5,0a.73.73,0,0,1-.46-.21c-.51-.39-.91-.38-1.27,0a1,1,0,0,0,0,1.43.7.7,0,0,0,1.06.11,2.3,2.3,0,0,1,1.58-.4c1.1,0,2.2,0,3.3,0h.29a14.93,14.93,0,0,0-1.11,2.23L41.51,56.22a2.19,2.19,0,0,0-.12.33c0,.18-.14.23-.33.23-1.05,0-2.1,0-3.16,0a2.16,2.16,0,0,1-1.6-.69,21.33,21.33,0,0,0-1.76-1.67,6.17,6.17,0,0,1-2.18-4.72c-.11-2.65,0-5.3-.06-7.94a.64.64,0,0,0-.74-.65c-.19,0-.3.1-.3.34,0,2.47-.07,4.94,0,7.41a14.33,14.33,0,0,0,.21,2.62,7.44,7.44,0,0,0,2.29,3.71c.76.71,1.55,1.4,2.32,2.1a2.64,2.64,0,0,0,1.93.59c.86,0,1.73,0,2.6,0,.2,0,.27,0,.18.25-.72,1.89-1.42,3.78-2.13,5.67-.06.15-.13.23-.3.22a6.77,6.77,0,0,0-.78,0,.48.48,0,0,1-.37-.15q-4.63-4.49-9.29-9a.58.58,0,0,1-.16-.44l-.06-6.26c0-1,0-1.94,0-2.91A1.88,1.88,0,0,1,28.08,44a.66.66,0,0,0-.1-1,1.07,1.07,0,0,0-1.75.08.66.66,0,0,0-.05.87,1.93,1.93,0,0,1,.38,1.25c0,2.87,0,5.74,0,8.61a2.5,2.5,0,0,0,1,2.16,28.6,28.6,0,0,1,2.89,2.72C31.55,59.92,32.81,61,34,62.14c.45.46.89.93,1.31,1.42A4,4,0,0,0,38,65.09c.2,0,.2.09.14.24-.35.91-.69,1.82-1,2.73a.26.26,0,0,1-.31.2,4.21,4.21,0,0,0-.87,0A2.08,2.08,0,0,1,34,67.53c-2.92-2.86-5.88-5.68-8.8-8.55a3.14,3.14,0,0,0-3.12-1,5.22,5.22,0,0,1-2.36,0A5.32,5.32,0,0,0,18.56,58a1.37,1.37,0,0,1-1-.3,1.07,1.07,0,0,0-1.41,0,1.32,1.32,0,0,0-.45,1.54,1,1,0,0,0,1.48.59,1.32,1.32,0,0,0,.5-.33,1.54,1.54,0,0,1,1.33-.5c1.19,0,2.37,0,3.55,0a2.25,2.25,0,0,1,1.71.68l7.8,7.56c.33.33.64.68,1,1a3.45,3.45,0,0,0,3.08,1.2l.43,0c-.24.63-.47,1.23-.69,1.83q-.85,2.23-1.69,4.49c-.08.22-.14.31-.42.23a1.31,1.31,0,0,0-1.38.85A1.16,1.16,0,0,0,33,78.18c.21.12.2.21.13.4-.46,1.2-.92,2.4-1.36,3.61-.08.2-.17.23-.36.15a2.27,2.27,0,0,1-.87-.69A8.91,8.91,0,0,0,28.2,79.4a1.68,1.68,0,0,1-.77-1.49l0-4.64a2.05,2.05,0,0,1,.28-1.08c.07-.12.13-.24.19-.37.25-.55.23-.84-.07-1.08a1.34,1.34,0,0,0-1.63-.09.89.89,0,0,0-.32,1.17,1.42,1.42,0,0,0,.17.35,1.83,1.83,0,0,1,.36,1.34c0,1.48,0,2.95,0,4.43a2.86,2.86,0,0,0,.71,2,21.34,21.34,0,0,0,1.72,1.71l1.38,1.31a1.78,1.78,0,0,0,.75.49c.25.07.26.18.17.4q-1.53,4-3,8c-.26.68-.5,1.36-.72,2-.08.24-.17.33-.43.33-1.83,0-3.66,0-5.49,0a.44.44,0,0,1-.43-.2c-.36-.57-.64-.64-1.18-.34a1.1,1.1,0,0,0-.6,1.4,1,1,0,0,0,1.4.53,2.75,2.75,0,0,1,1.48-.33c1.5,0,3,0,4.5,0,.18,0,.29,0,.21.24a33.29,33.29,0,0,1-2.18,5.24.51.51,0,0,1-.54.32,21.54,21.54,0,0,1-4.54-.3A10.72,10.72,0,0,1,11.87,95a12,12,0,0,1-1.09-4.44c-.24-2.77-.11-5.55-.14-8.32,0-.35.26-.51.43-.74a1,1,0,0,0,.11-1.26,1.14,1.14,0,0,0-1.54-.4A1.15,1.15,0,0,0,9,81.24a.85.85,0,0,0,.06.17A4.67,4.67,0,0,1,9.58,84c0,2.09,0,4.17.14,6.26a12.68,12.68,0,0,0,2.18,6.82,11.79,11.79,0,0,0,6.73,4.47,21.33,21.33,0,0,0,5,.65,3,3,0,0,0-.19,1.41,12.79,12.79,0,0,1-.1,2.14,2.67,2.67,0,0,0,1.16,2.81,3.43,3.43,0,0,0,2.17.43,58,58,0,0,1,6.85-.06,3.7,3.7,0,0,0,1.76-.41,12.47,12.47,0,0,0,1.68-1,.73.73,0,0,1,.45-.16l8.68,0a2.81,2.81,0,0,1,1.81.65.83.83,0,0,0,1.28-.18,1.26,1.26,0,0,0-.47-2,.77.77,0,0,0-.89.08,1.85,1.85,0,0,1-1.33.4c-1.33-.07-2.66,0-4,0s-2.64,0-4,0c.24-.27.47-.5.68-.75a15.82,15.82,0,0,0,2.94-5.19c.23-.66.48-1.32.71-2,.06-.17.12-.2.25-.06s.41.42.62.63a2.36,2.36,0,0,0,1.8.72c1.25,0,2.51,0,3.76,0a2.18,2.18,0,0,1,1.63.68c.9.9,1.8,1.82,2.75,2.67a2,2,0,0,1,.71,1.51c0,2.14,0,4.27,0,6.4,0,.18-.08.21-.23.21-3.29,0-6.59,0-9.88,0-1.16,0-2.32,0-3.47,0-5.45,0-10.9,0-16.35,0a17.79,17.79,0,0,1-9.46-2.57A18.12,18.12,0,0,1,6.45,96.68a25,25,0,0,1-.4-5C6,87.58,6,83.45,6,79.31a5.29,5.29,0,0,1,2.61-4.72c.57-.36.56-.36.16-.88a14.27,14.27,0,0,1-2.87-7.06,18.57,18.57,0,0,1,.37-7.46,14.84,14.84,0,0,1,6.9-9.14,10.34,10.34,0,0,1,3.63-1.23c1.07-.18,1.07-.19,1.07-1.25,0-1.3,0-2.6,0-3.9a10.07,10.07,0,0,1,4.58-8.52,9.48,9.48,0,0,1,8.19-1.07l.47.14c.4.13.56.07.75-.3a27.24,27.24,0,0,1,3.61-5.17A25.86,25.86,0,0,1,49.62,20.4a16.7,16.7,0,0,1,9.84.56,12.43,12.43,0,0,1,3.94,2.39.43.43,0,0,0,.67,0c3.14-2.84,6.92-3.63,11-3.38a24.14,24.14,0,0,1,11.66,4.17,26.27,26.27,0,0,1,9.33,10.1c.12.23.22.18.4.11a9.81,9.81,0,0,1,13.06,6.47,10.12,10.12,0,0,1,.33,2.57c0,1.59,0,3.19,0,4.78a.5.5,0,0,0,.46.57c.56.1,1.13.17,1.69.31a12.31,12.31,0,0,1,7,5,16,16,0,0,1,3,10.83,17.28,17.28,0,0,1-1.07,5.41,14.2,14.2,0,0,1-2.13,3.7c-.22.27-.19.4.09.59a5.9,5.9,0,0,1,2.62,3.87,7.22,7.22,0,0,1,.12,1.54q0,6.33,0,12.65A17.39,17.39,0,0,1,118.46,103a18.2,18.2,0,0,1-10.8,7.49,25,25,0,0,1-5.72.52c-5.86,0-11.72,0-17.58,0-3.69,0-7.38,0-11.07,0-.27,0-.37,0-.37-.35,0-2.21,0-4.41,0-6.61a2,2,0,0,1,.82-1.77A37.06,37.06,0,0,0,77.51,99l.42-.38a3,3,0,0,1,2.42-.92c1.44.09,2.88,0,4.32.07a3.06,3.06,0,0,0,2.53-1.07c.24-.28.5-.53.75-.79a2.74,2.74,0,0,1,2.13-.73c2.32,0,4.64,0,7,0h8.29a4.38,4.38,0,0,1,1.93.31.79.79,0,0,0,.48.05c.48-.07.94-.56.9-.94a1,1,0,0,0-1.17-.78,12.67,12.67,0,0,1-4.42.3c-4.76,0-9.52,0-14.27,0a.84.84,0,0,0-.63.23c-.51.48-1.06.93-1.56,1.42a2.76,2.76,0,0,1-2.08.85c-1.66,0-3.33,0-5,0a3.47,3.47,0,0,0-2.62,1.06L72.57,102a2.35,2.35,0,0,0-.7,1.74c0,2.34,0,4.68,0,7,0,.24,0,.34-.32.33-.65,0-1.31,0-2,0-.28,0-.32-.09-.32-.34q0-4.92,0-9.84V99.34a1.1,1.1,0,0,1,.36-.84c1.76-1.75,3.61-3.41,5.43-5.09a1.88,1.88,0,0,1,1.41-.52c1.31,0,2.62.07,3.93.12a2.51,2.51,0,0,0,2-.75c.82-.8,1.7-1.54,2.54-2.32a.7.7,0,0,1,.53-.21,35.63,35.63,0,0,1,3.58,0,5.09,5.09,0,0,1,.87.14c.25.06.36,0,.44-.25a1.19,1.19,0,0,0-.2-1.09c-.06-.12-.16-.07-.24,0a14.35,14.35,0,0,1-3.37.17l.33-.34c1-1,2.09-2,3.13-3,.41-.4.8-.82,1.18-1.25a.57.57,0,0,1,.41-.21,33,33,0,0,1,4.22,0,3.09,3.09,0,0,0,2.84-1.26A11.27,11.27,0,0,1,101,80.36a2.7,2.7,0,0,0,1.09-2.28c0-1.62,0-3.24,0-4.85a1.17,1.17,0,0,1,.42-1,1.08,1.08,0,0,0-.56-1.86,1.29,1.29,0,0,0-1.25.55A.94.94,0,0,0,100.5,72c.06.13.13.25.2.37a2,2,0,0,1,.29,1.21A32.15,32.15,0,0,0,101,78a1.85,1.85,0,0,1-.7,1.6A16,16,0,0,0,98,81.85a2.34,2.34,0,0,1-1.92.91H92.57a4.68,4.68,0,0,0-1.12.11l0-.05a22.35,22.35,0,0,0,2.23-3.72l0-.07c.15-.45.29-.81,1-.69a1.13,1.13,0,0,0,1.18-1A1.14,1.14,0,0,0,95,76c-.2-.07-.19-.15-.13-.3q1.65-4.5,3.31-9a1.07,1.07,0,0,1,.27-.36c2.26-2.19,4.53-4.37,6.79-6.57a2.12,2.12,0,0,1,1.67-.66c1,0,2.08,0,3.12,0a.7.7,0,0,1,.61.26,2.4,2.4,0,0,0,.27.28c.31.26.52.2.72-.14a1.76,1.76,0,0,0,.12-1.61c-.07-.19-.16-.29-.38-.23a11.09,11.09,0,0,1-4.25.31,3.15,3.15,0,0,0-2.69,1c-1.61,1.6-3.25,3.17-4.88,4.76a2.75,2.75,0,0,1-.26.22ZM117.11,86.3a39.85,39.85,0,0,1-.32,5.57,10,10,0,0,1-4.93,7.28,14.93,14.93,0,0,1-6.63,1.82c-1.64.11-3.28,0-4.92.09a3.89,3.89,0,0,1-2.2-.45.9.9,0,0,0-.91,0,1.12,1.12,0,0,0-.59,1.14,1.07,1.07,0,0,0,.66,1,1.1,1.1,0,0,0,1.24-.25,1,1,0,0,1,.78-.31c.24,0,.49,0,.73,0a46.91,46.91,0,0,0,6.81-.28,15.58,15.58,0,0,0,4.63-1.34,11,11,0,0,0,5.81-6.44,23.16,23.16,0,0,0,.86-5.61c.14-1.91.14-3.84.14-5.76a2.07,2.07,0,0,1,.43-1.34,1.1,1.1,0,0,0-.12-1.52,1.13,1.13,0,0,0-1.48-.07,1,1,0,0,0-.36,1.47,2.82,2.82,0,0,1,.37,1.47C117.1,83.94,117.11,85.12,117.11,86.3ZM11.91,57.15c0-.38-.12-.46-.46-.27a.78.78,0,0,0-.3.24,8.84,8.84,0,0,0-1.63,3.61c-.12.81-.19,1.62-.24,2.44a13.32,13.32,0,0,0,2.32,8.44,22.92,22.92,0,0,0,3.64,4,.6.6,0,0,1,.25.44c.13,3.48.14,7,.07,10.43a2.42,2.42,0,0,1-.5,1.48.75.75,0,0,0-.14.69,1.37,1.37,0,0,0,1,1A1.09,1.09,0,0,0,17,89.24a1.18,1.18,0,0,0,0-1.62,1,1,0,0,1-.37-.68c0-2,0-3.89,0-5.84,0-1.5.14-3,.05-4.49a3.13,3.13,0,0,0-1.3-2.54,11.19,11.19,0,0,1-2-2,12,12,0,0,1-2.5-4,15.09,15.09,0,0,1-.62-3.59,11.23,11.23,0,0,1,1.4-6.69A1.3,1.3,0,0,0,11.91,57.15Zm23.76-9.24a6.63,6.63,0,0,0,.39,2.35,6.74,6.74,0,0,0,4.6,3.89,6.31,6.31,0,0,0,1,.15.35.35,0,0,0,.43-.27c0-.22,0-.42-.23-.51s-.55-.21-.83-.28a5.87,5.87,0,0,1-2-.94,5,5,0,0,1-2.24-3.68,9.92,9.92,0,0,1,.2-3.17,21.52,21.52,0,0,1,6.36-11.1,14.07,14.07,0,0,1,4.93-3.28,2.62,2.62,0,0,1,2.42.08.59.59,0,0,0,.82-.79,1,1,0,0,1,0-.71.57.57,0,0,0-.77-.67.75.75,0,0,0-.35.22,1.81,1.81,0,0,1-.94.53,13.72,13.72,0,0,0-4.52,2.1,22.78,22.78,0,0,0-7.15,8.38A19,19,0,0,0,35.67,47.91Zm82.84,15.81a14.08,14.08,0,0,0-.17-2.07,10.47,10.47,0,0,0-1-3.42c-.13-.26-.32-.4-.59-.27s-.27.37-.15.63a7.35,7.35,0,0,1,.51,1.19,13.62,13.62,0,0,1-1.22,10.45A15.92,15.92,0,0,1,111.65,75a.65.65,0,0,0-.27.56c0,1.08,0,2.15,0,3.23,0,2.69-.09,5.39,0,8.08a.76.76,0,0,1-.28.65,1,1,0,0,0-.41.75,1.28,1.28,0,0,0,.85,1.28,1.22,1.22,0,0,0,1.38-.5,1.68,1.68,0,0,0-.16-1.59.75.75,0,0,1-.24-.58c0-3.49,0-7,0-10.47a1.3,1.3,0,0,1,.59-1.26,3.57,3.57,0,0,0,.5-.45A14.26,14.26,0,0,0,118.51,63.72ZM106.67,77.43V81a2.08,2.08,0,0,1-.65,1.54c-1.58,1.57-3.15,3.14-4.7,4.74a1.13,1.13,0,0,1-1,.4c-.2,0-.45-.1-.64.07a2.89,2.89,0,0,0-.83.94.67.67,0,0,0,0,.7c.16.17.41,0,.59-.05.53-.24,1-.49,1.55-.74a1.71,1.71,0,0,0,.56-.27l5.46-5.48a2,2,0,0,0,.61-1.55c0-.58,0-1.15,0-1.73,0-1.89-.07-3.79,0-5.69a.75.75,0,0,1,.26-.54l4.75-4.74a2.94,2.94,0,0,0,1-1.76c.09-1,0-2,0-2.95a.26.26,0,0,0-.35-.27c-.24.07-.57,0-.57.43,0,.58,0,1.17,0,1.75a2.78,2.78,0,0,1-.87,2.25c-1.73,1.71-3.39,3.5-5.08,5.26a.64.64,0,0,0-.2.49C106.67,75,106.67,76.22,106.67,77.43Zm-29,29.47a1.23,1.23,0,0,0,.74,1.18c.48.2.81-.08,1.1-.4a.82.82,0,0,1,.59-.25c1.48-.09,3-.1,4.46-.11,5,0,10,0,15,0a30.08,30.08,0,0,1,4.35,0,.66.66,0,0,0,.31,0c.26-.1.52-.2.47-.56a.58.58,0,0,0-.61-.48q-5,.06-10,0c-4.34,0-8.68.09-13,.06a2,2,0,0,1-1.62-.44l-.09-.05A1.1,1.1,0,0,0,77.66,106.9ZM20.24,78c0,1.39,0,2.79,0,4.18a.51.51,0,0,0,.17.43l4.87,4.68a3.78,3.78,0,0,0,.73.53c.15.09.31.14.45,0a.33.33,0,0,0,0-.47c-.1-.13-.19-.27-.3-.39-1.34-1.31-2.6-2.7-4-4a2.91,2.91,0,0,1-1-2.37c.07-2.3,0-4.59,0-6.89a1.18,1.18,0,0,0-.34-.87c-1.69-1.8-3.47-3.52-5.23-5.25a.6.6,0,0,1-.25-.44c-.08-1.08-.18-2.17-.27-3.25,0-.35-.15-.41-.46-.26a.45.45,0,0,0-.27.45,8.46,8.46,0,0,1,0,1.51,3.62,3.62,0,0,0,1.21,3.31c1.53,1.41,3,2.92,4.41,4.4a.67.67,0,0,1,.21.52C20.23,75.19,20.24,76.58,20.24,78Zm-1.5-13.24a1.78,1.78,0,0,0,1.13,2,5.28,5.28,0,0,0,.53.27.68.68,0,0,0,.93-.31,8.32,8.32,0,0,1,.73-1c.21-.25.43-.49.64-.75a.68.68,0,0,0,0-.87.66.66,0,0,0-.85-.19,6,6,0,0,0-.69.42c-.52.35-.78.32-1.2-.16a.65.65,0,0,0-.69-.22.64.64,0,0,0-.52.55C18.75,64.52,18.75,64.66,18.74,64.72Zm90.9,0c0-.43-.06-.66-.35-.79a.61.61,0,0,0-.81.29.69.69,0,0,1-.17.17.5.5,0,0,1-.77,0c-.08-.07-.15-.16-.23-.22a.87.87,0,0,0-1.42.4,1,1,0,0,0,.36,1.15c.52.41,1.08.78,1.61,1.17a.78.78,0,0,0,1.27-.32A4.92,4.92,0,0,0,109.64,64.7ZM88.76,99.48a.74.74,0,0,0-.93.62c0,.11-.09.21-.13.32a1.48,1.48,0,0,0,1.54,2,1.54,1.54,0,0,0,1.38-1.44,1.3,1.3,0,0,0-1.2-1.39C89.2,99.51,89,99.5,88.76,99.48ZM43.37,48.75a.69.69,0,0,0,.73-.35.68.68,0,0,0,0-.76.65.65,0,0,0-.74-.27l-.62.11a16.85,16.85,0,0,1-2.13.07c-.37,0-.46.2-.47.5s.09.52.47.54A17.08,17.08,0,0,1,43.37,48.75ZM75.09,35.46a10.06,10.06,0,0,0,1.82,0c.08,0,.18,0,.23-.1a.53.53,0,0,0-.43-.68h-2c-.44,0-.88.08-1.32.13s-.26.28-.28.47.18.17.29.17Z" /><path fill="#053050" d="M74.48,40.23c6.4,0,12.8,0,19.2,0a14.34,14.34,0,0,1,5.53,1,6.09,6.09,0,0,1,4,5.94,16.43,16.43,0,0,1-1.28,6.15c-3,8-6.06,15.94-8.93,24A20.1,20.1,0,0,1,78.49,89.7a16.72,16.72,0,0,1-4.41.23c-3.13-.22-6.27-.23-9.41-.21l-11.18.13A7.51,7.51,0,0,1,51,89.53a2.62,2.62,0,0,1-1.94-2.92,8.93,8.93,0,0,1,.64-2.55c.46-1.19.93-2.39,1.41-3.58a7.76,7.76,0,0,1,7.71-5.29c6,0,11.93-.08,17.89,0a9.21,9.21,0,0,0,1.05,0,2.33,2.33,0,0,0,2-1.54c.37-.91.7-1.83,1-2.75,1.7-4.66,3.46-9.28,5.33-13.87a3.6,3.6,0,0,0,.27-1,.83.83,0,0,0-.78-1,7,7,0,0,0-1.37-.07L73.08,55c-4.23,0-8.45,0-12.68-.07a7.08,7.08,0,0,0-1.13,0,2.53,2.53,0,0,0-2.09,1.56c-.41.84-.69,1.73-1,2.61Q50.22,74.93,44.29,90.74c-1.23,3.26-2.4,6.54-3.63,9.79A12.15,12.15,0,0,1,36,106.62l-.06,0a5,5,0,0,1-3.4,1,33.12,33.12,0,0,0-5.72.06,3.76,3.76,0,0,1-1.16,0,1.24,1.24,0,0,1-1.09-1.23,2.21,2.21,0,0,1,0-.63,11.57,11.57,0,0,0,.11-2.63.57.57,0,0,1,.08-.4,22.07,22.07,0,0,0,2.91-6.12C29.54,91,31.82,85.53,33.91,80q6.27-16.7,12.57-33.38a17,17,0,0,1,1.45-3,6.62,6.62,0,0,1,4.81-3.12,18.39,18.39,0,0,1,2.87-.21Z" /><path fill="#05192e" d="M85.1,56.24v0c-.26.91-.26.91-1.18.91-.44,0-.87,0-1.3,0a.93.93,0,0,0-.72.3c-2,2.05-4.06,4.12-6.16,6.12a3.34,3.34,0,0,0-1.06,2.61c.07,2,0,4.08,0,6.12a.73.73,0,0,1-.22.52c-.37.34-.67.83-1.1,1a4.1,4.1,0,0,1-1.49.05c-1.76,0-3.51,0-5.27,0-.31,0-.36-.09-.35-.37,0-.6,0-1.2,0-1.79a.63.63,0,0,1,.21-.52,43.11,43.11,0,0,0,3.36-3.4,3.29,3.29,0,0,1,.41-.33,3.85,3.85,0,0,0,1.56-3.69c-.06-.44,0-.89-.08-1.33a1.74,1.74,0,0,1,.54-1.37c1.53-1.59,3.08-3.17,4.62-4.76a.34.34,0,0,1,.25-.11Z" /><path fill="#05192e" d="M45.37,91.43c1,1,2,1.88,2.92,2.87a3.19,3.19,0,0,0,3,1,2.65,2.65,0,0,1,2.33.79q2,2,4.11,4a1.38,1.38,0,0,1,.4.92c.08,1.26,0,2.53,0,3.79,0,2,0,4,.07,6,0,.26,0,.34-.32.33-.77,0-1.54,0-2.32,0-.27,0-.32-.07-.32-.33,0-2.47,0-4.94,0-7.41a.68.68,0,0,0-.25-.57c-1.26-1.17-2.52-2.32-3.73-3.53a2.52,2.52,0,0,0-2-.77c-1.41,0-2.81,0-4.22,0a.61.61,0,0,1-.46-.18c-.4-.39-.8-.76-1.2-1.13-.1-.1-.18-.18-.12-.33Z" /><path fill="#05192e" d="M47,87a4.39,4.39,0,0,1,1.1,1.51,3.49,3.49,0,0,0,2.47,2.2,7.72,7.72,0,0,0,2.73.39,2.1,2.1,0,0,1,1.65.7l2.57,2.5q1.77,1.68,3.55,3.35a.58.58,0,0,1,.19.46q0,6.35,0,12.68c0,.26-.06.32-.31.31-.51,0-1,0-1.54,0-.23,0-.27-.07-.27-.28,0-3-.06-5.95,0-8.92a3.53,3.53,0,0,0-1-2.72c-1.54-1.55-3.09-3.07-4.65-4.6a1.65,1.65,0,0,0-1.26-.41,17.33,17.33,0,0,1-2.39,0,.68.68,0,0,1-.44-.19c-1.15-1.12-2.31-2.25-3.48-3.37a.31.31,0,0,1-.11-.39C46.22,89.16,46.61,88.11,47,87Z" /><path fill="#05192e" d="M84.61,88.76c0,.18-.1.22-.17.29-.79.71-1.59,1.42-2.37,2.14a2.6,2.6,0,0,1-1.85.72c-1.47,0-3,0-4.43,0a1.53,1.53,0,0,0-1.11.55c-1.06,1-2.16,2-3.25,3.05-.76.7-1.51,1.41-2.28,2.09a2.47,2.47,0,0,0-.86,2c0,3.73,0,7.45,0,11.18,0,.32-.09.39-.39.37a12.52,12.52,0,0,0-1.37,0c-.24,0-.29-.07-.29-.3,0-3.62.06-7.23.08-10.85,0-1.22,0-2.44,0-3.66a.55.55,0,0,1,.19-.45c1.64-1.53,3.31-3,4.84-4.65a.5.5,0,0,1,.41-.13c1.18.07,2.36.17,3.55.18a18.54,18.54,0,0,0,8.75-2.18C84.24,89,84.41,88.87,84.61,88.76Z" /><path fill="#05192e" d="M56.43,62c.93.88,1.85,1.72,2.74,2.61a19.8,19.8,0,0,1,1.9,1.76.73.73,0,0,1,.19.49q0,3.36,0,6.72c0,.25,0,.33-.32.33a22.39,22.39,0,0,0-3.57.12c-.34.06-.67.13-1,.21-.15,0-.26,0-.32-.15a3.07,3.07,0,0,0-1-1.35A15.39,15.39,0,0,1,53.26,71a.38.38,0,0,1-.07-.44c.39-1,.77-2,1.14-3,.09-.26.16-.24.34-.08.41.38.86.73,1.26,1.11a6.44,6.44,0,0,0,1.36.85,1.26,1.26,0,0,0,1.42-.16.8.8,0,0,0,.3-.84,1.32,1.32,0,0,0-1.64-1,6.19,6.19,0,0,0-.8.34.33.33,0,0,1-.39,0c-.48-.34-.91-.74-1.35-1.12a.19.19,0,0,1-.06-.24Z" /><path fill="#05192e" d="M75.52,56.25c-1.32,1.34-2.58,2.61-3.83,3.89a.87.87,0,0,1-.11.09,2.47,2.47,0,0,0-.94,2.35,8.29,8.29,0,0,1-.1,2.63,2.94,2.94,0,0,1-.71,1.42c-1.16,1.14-2.34,2.27-3.51,3.4-.11-.11-.06-.22-.06-.31,0-2.58,0-5.16,0-7.73,0-.65,0-1.3,0-2a1.21,1.21,0,0,1,.39-.94l2.81-2.7a.47.47,0,0,1,.33-.16Z" /><path fill="#05192e" d="M65.22,101.07v9.73c0,.21,0,.31-.27.3-.8,0-1.59,0-2.39,0-.22,0-.27,0-.27-.27q0-9.76,0-19.54c0-.24.08-.29.3-.29.76,0,1.53,0,2.29,0,.25,0,.3.08.3.32q0,4.88,0,9.77Z" /><path fill="#05192e" d="M75,73.88a2.77,2.77,0,0,0,.82-2.4c0-1.81,0-3.61,0-5.41a1.82,1.82,0,0,1,1-1.76,12.9,12.9,0,0,0,3-2.49c1-1,1.92-2.06,3-3,.22-.19.46-.36.7-.53a1.43,1.43,0,0,1,.94-.14A3.81,3.81,0,0,1,84,59q-1.22,3.18-2.45,6.34a1.24,1.24,0,0,1-.39.57c-.3.24-.59.5-.87.77a2.83,2.83,0,0,0-.85,2.11,5.42,5.42,0,0,0,0,.57,7.08,7.08,0,0,1-.79,3.78,1.29,1.29,0,0,1-1.33.88c-.79,0-1.58,0-2.37,0Z" /><path fill="#05192e" d="M62.22,65c0-2.83,0-5.67,0-8.5,0-.29.08-.34.35-.34.79,0,1.59,0,2.39,0,.29,0,.37.08.36.38l0,16.19c0,.27,0,.54,0,.81s0,.34-.32.33c-.78,0-1.57,0-2.35,0-.26,0-.33,0-.33-.32,0-2.86,0-5.71,0-8.57Z" /><path fill="#05192e" d="M61.33,60.52c0,1.35,0,2.71,0,4.07,0,.1.08.27-.08.3s-.33.11-.48-.07c-1.13-1.34-2.47-2.46-3.7-3.69a.42.42,0,0,1-.11-.54c.42-1.07.8-2.15,1.22-3.21a1.64,1.64,0,0,1,1-1.13,3.21,3.21,0,0,1,.87-.08c.35,0,.7,0,1.05,0s.27.06.27.28C61.32,57.8,61.33,59.16,61.33,60.52Z" /><path fill="#05192e" d="M55.71,91.08h1.42l2.25,0a.45.45,0,0,1,.33.07c.39.35.8.68,1.19,1a1.15,1.15,0,0,1,.4,1c-.07,1,0,2.1,0,3.15,0,0,0,.09,0,.2l-5.56-5.31Z" /><path fill="#05192e" d="M52.7,71.92c.76.81,1.49,1.58,2.21,2.36.18.19.17.33-.1.45a8.45,8.45,0,0,0-3.7,3.07c-.06.08-.08.33-.28.2s-.36-.22-.24-.52c.52-1.32,1-2.64,1.51-4C52.3,73,52.49,72.47,52.7,71.92Z" /><path fill="#05192e" d="M66.31,94.59V91.21c0-.16,0-.23.2-.23,1.17,0,2.34,0,3.53,0C68.87,92.26,67.61,93.38,66.31,94.59Z" /><path fill="#053050" d="M50.1,78.83c.23.1.25.23.16.46A43.29,43.29,0,0,0,48,85.63c0,.19-.08.38-.13.58-.33-.17-.38-.38-.25-.72.82-2.13,1.62-4.27,2.43-6.41Z" /><path fill="#05192e" d="M66.25,58V56.42c0-.1,0-.19.14-.19H68L66.33,58Z" /><path fill="#05192e" d="M99.32,64l-.07.08s0-.09,0-.11Z" /><path fill="#05192e" d="M91.45,82.87s-.08,0-.09,0,0,0,0-.06Z" /><path fill="#05192e" d="M84.74,88.74v0l.05,0-.05,0Z" /><path fill="#05192e" d="M84.74,88.74l-.06.06,0,0Z" /></svg>
    ),
}