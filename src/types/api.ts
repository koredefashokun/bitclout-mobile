// This is copied directly from the bitclout angular application, only replacing classes with interfaces.
export interface Transaction {
  inputs: {
    txID: string;
    index: number;
  }[];
  outputs: {
    amountNanos: number;
    publicKeyBase58Check: string;
  }[];

  txnType: string;
  publicKeyBase58Check: string;
  signatureBytesHex: string;
}

export interface ProfileEntryResponse {
  Username: string;
  Description: string;
  ProfilePic?: string;
  CoinEntry?: {
    BitCloutLockedNanos: number;
    CoinWatermarkNanos: number;
    CoinsInCirculationNanos: number;
    CreatorBasisPoints: number;
  };
  StakeMultipleBasisPoints?: number;
  PublicKeyBase58Check?: string;
  UsersThatHODL?: any;
  Posts?: PostEntryResponse[];
  IsReserved?: boolean;
  IsVerified?: boolean;
}

export interface User {
  ProfileEntryResponse: ProfileEntryResponse;

  PublicKeyBase58Check: string;
  PublicKeysBase58CheckFollowedByUser: string[];
  EncryptedSeedHex: string;

  BalanceNanos: number;
  UnminedBalanceNanos: number;

  NumActionItems: any;
  NumMessagesToRead: any;

  UsersYouHODL: BalanceEntryResponse[];
  UsersWhoHODLYouCount: number;

  HasPhoneNumber: boolean;
  CanCreateProfile: boolean;
  BlockedPubKeys: { [key: string]: object };

  IsAdmin?: boolean;
  IsSuperAdmin?: boolean;
}

export interface PostEntryResponse {
  PostHashHex: string;
  PosterPublicKeyBase58Check: string;
  ParentStakeID: string;
  Body: string;
  RecloutedPostHashHex: string;
  ImageURLs: string[];
  RecloutPost: PostEntryResponse;
  CreatorBasisPoints: number;
  StakeMultipleBasisPoints: number;
  TimestampNanos: number;
  IsHidden: boolean;
  ConfirmationBlockHeight: number;
  StakeEntry: any;
  StakeEntryStats: any;
  // PostEntryResponse of the post that this post reclouts.
  RecloutedPostEntryResponse: PostEntryResponse;
  // The profile associated with this post.
  ProfileEntryResponse: ProfileEntryResponse;
  // The comments associated with this post.
  Comments: PostEntryResponse[];
  LikeCount: number;
  RecloutCount: number;
  DiamondCount: number;
  // Information about the reader's state w/regard to this post (e.g. if they liked it).
  PostEntryReaderState?: PostEntryReaderState;
  // True if this post hash hex is in the global feed.
  InGlobalFeed: boolean;
  CommentCount: number;
  // A list of parent posts for this post (ordered: root -> closest parent post).
  ParentPosts: PostEntryResponse[];
  InMempool: boolean;
  IsPinned: boolean;
  DiamondsFromSender?: number;
}

export interface DiamondsPost {
  Post: PostEntryResponse;
  // Boolean that is set to true when this is the first post at a given diamond level.
  ShowDiamondDivider?: boolean;
}

export interface PostEntryReaderState {
  // This is true if the reader has liked the associated post.
  LikedByReader?: boolean;

  // This is true if the reader has reclouted the associated post.
  RecloutedByReader?: boolean;

  // This is the post hash hex of the reclout
  RecloutPostHashHex?: string;

  // Level of diamond the user gave this post.
  DiamondLevelBestowed?: number;
}

export interface BalanceEntryResponse {
  // The public keys are provided for the frontend
  HODLerPublicKeyBase58Check: string;
  // The public keys are provided for the frontend
  CreatorPublicKeyBase58Check: string;

  // Has the hodler purchased these creator coins
  HasPurchased: boolean;
  // How much this HODLer owns of a particular creator coin.
  BalanceNanos: number;
  // The net effect of transactions in the mempool on a given BalanceEntry's BalanceNanos.
  // This is used by the frontend to convey info about mining.
  NetBalanceInMempool: number;

  ProfileEntryResponse: ProfileEntryResponse;
}
