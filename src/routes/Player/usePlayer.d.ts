declare const usePlayer: (urlParams: UrlParams) => [Player, (videoParams: { hash: string | null, size: number | null, filename: string | null }) => void, (time: number, duration: number, device: string) => void, (time: number, duration: number, device: string) => void, (paused: boolean) => void, () => void, () => void,];
export = usePlayer;
