import type { IconWeight, Icon as PhosphorIcon } from "@phosphor-icons/react";
import {
	CheckIcon,
	PencilSimpleIcon,
	PlusIcon,
	SpinnerIcon,
	TrashIcon,
	XIcon,
} from "@phosphor-icons/react";
import { cva, type VariantProps } from "class-variance-authority";

// eslint-disable-next-line react-refresh/only-export-components
export const iconVariants = cva("", {
	variants: {
		animate: {
			false: "",
			true: "animate-spin",
		},
	},
	defaultVariants: {
		animate: false,
	},
});

const iconMap = {
	check: CheckIcon,
	x: XIcon,
	pencil: PencilSimpleIcon,
	spinner: SpinnerIcon,
	trash: TrashIcon,
	plus: PlusIcon,
} satisfies Record<string, PhosphorIcon>;

export type IconName = keyof typeof iconMap;

interface IconProps extends VariantProps<typeof iconVariants> {
	name: IconName;
	size?: number;
	weight?: IconWeight;
	color?: string;
	className?: string;
}

export default function Icon({
	name,
	size = 24,
	weight = "regular",
	color,
	className,
	animate,
}: IconProps) {
	const IconComponent = iconMap[name];
	return (
		<IconComponent
			size={size}
			weight={weight}
			color={color}
			className={iconVariants({ animate, className })}
		/>
	);
}
