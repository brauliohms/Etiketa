import { ComponentType, SVGAttributes } from "react";
import { Link } from "react-router-dom";

interface MenuItemProps {
	title: string;
	icon?: ComponentType<SVGAttributes<SVGElement>>;
	url: string;
}

export function MenuItem({ title, icon: Icon, url }: MenuItemProps) {
	return (
		<Link className="flex items-center gap-x-4 text-white" to={url}>
			{Icon && <Icon className="h-6 w-6 text-white" />}
			<span className="hidden font-normal transition-all hover:font-bold lg:inline">
				{title}
			</span>
		</Link>
	);
}
