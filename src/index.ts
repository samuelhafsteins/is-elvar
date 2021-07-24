export const isElvar = (value: string): boolean => {
	value = value.toLocaleLowerCase();
	if (value === "elvar" || value === "elvar333") return true;
	return false;
}