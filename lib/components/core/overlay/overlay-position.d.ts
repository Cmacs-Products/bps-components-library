import { ConnectedOverlayPositionChange, ConnectionPositionPair } from '@angular/cdk/overlay';
export declare const POSITION_MAP: {
    [key: string]: ConnectionPositionPair;
};
export declare const DEFAULT_TOOLTIP_POSITIONS: ConnectionPositionPair[];
export declare const DEFAULT_DROPDOWN_POSITIONS: ConnectionPositionPair[];
export declare const DEFAULT_SUBMENU_POSITIONS: ConnectionPositionPair[];
export declare const DEFAULT_MENTION_TOP_POSITIONS: ConnectionPositionPair[];
export declare const DEFAULT_MENTION_BOTTOM_POSITIONS: ConnectionPositionPair[];
export declare function getPlacementName(position: ConnectedOverlayPositionChange): string | undefined;
