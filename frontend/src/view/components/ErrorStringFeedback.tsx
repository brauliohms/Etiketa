export function ErrorStringFeedback({
	message,
}: {
	message: string | undefined;
}) {
	return <span className="text-sm font-semibold text-rose-500">{message}</span>;
}
