import { render } from "react-dom";
import { View } from "react-native-web";
import { symbolicateLogLazy } from "react-native/Libraries/LogBox/Data/LogBoxData";

render() {
    return (
     <View style ={style.container}>
     <View style ={style.cardContainer}>
     <View style ={style.authorContainer}>
    <View style ={style.authorImageContainer}>
        <Image
        source={require("../assets/profile_image.png")}
        style={style.profileImage}
        ></Image>
        </View>
        <View style={StyleSheet.authorNameContainer}>
            <Text style ={styles.authorNameText}>{this.props.post.author}</Text>
            </View>
            </View>
            <Image source={require("../assets/post.jpeg")} style={styles.postImage} />
            <View style={styles.captionContainer}>
                <Text style ={styles.captionText}>
                    {this.props.post.caption}
                    </Text>
                    </View>
                    <View style={styles.actionContainer}>
                        <View style={styles.likeButton}>
                            <Ionicons name={"heart"} size={RFValue(30)} color={"white"}>
                                <Text style ={styles.likeText}>12k</Text>
                                </Ionicons>
                                </View>
                                </View>
                                </View>
                                </View>





    )
}