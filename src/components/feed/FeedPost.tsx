import React from "react";
import { View, Text } from "react-native";

interface FeedPostProps {
  post: any;
}

const FeedPost: React.FC<FeedPostProps> = ({ post }) => {
  return (
    <View>
      {post.IsHidden && <Text>This post was removed by the user.</Text>}
    </View>
  );
};

export default FeedPost;
