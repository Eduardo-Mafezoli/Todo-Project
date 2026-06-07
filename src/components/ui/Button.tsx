/* eslint-disable react-refresh/only-export-components */
import { cva, type VariantProps } from "class-variance-authority";
import type React from "react";
import Icon, { type IconName } from "./Icon";
import Text from "./Text";

export const buttonVariants = cva(
	"flex items-center justify-center cursor-pointer transition rounded-lg group gap-2",
	{
		variants: {
			variant: {
				primary: "bg-gray-200 hover:bg-pink-light",
			},
			size: {
				md: "h-14 py-4 px-5",
			},
			disabled: {
				true: "pointer-events-none opacity-50",
			},
			handling: {
				true: "pointer-events-none"
			}
		},
		defaultVariants: { variant: "primary", size: "md", disabled: false, handling: false},
	},
);

export const buttonIconVariants = cva("transition", {
	variants: {
		variant: {
			primary: "fill-pink-base",
		},
		size: {
			md: "w-5 h-5",
		},
	},
	defaultVariants: { variant: "primary", size: "md" },
});

export const buttonTextVariants = cva("", {
	variants: {
		variant: {
			primary: "text-gray-400",
		},
	},
	defaultVariants: { variant: "primary" },
});

interface ButtonProps
	extends Omit<React.ComponentProps<"button">, "size" | "disabled">,
		VariantProps<typeof buttonVariants> {
	icon?: IconName;
	handling?: boolean;
}

export default function Button({
	variant,
	size,
	disabled,
	className,
	children,
	icon: IconComponent,
	handling,
	...props
}: ButtonProps) {
	return (
		<button
			className={buttonVariants({ variant, size, disabled, className, handling })}
			{...props}
		>
			{IconComponent && (
				<Icon
					name={handling ? "spinner" : IconComponent}
					animate={handling}
					className={buttonIconVariants({ variant, size })}
				/>
			)}
			<Text variant="body-md-bold" className={buttonTextVariants({ variant })}>
				{children}
			</Text>
		</button>
	);
}
