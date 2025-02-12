import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function List(props) {
  const getImageSource = (img) => {
    return typeof img === 'number' ? img : { uri: img };
  };

  const carregarIconeLike = (likeada) => {
    return likeada ? require('../img/likeada.png') : require('../img/like.png');
  };

function mostraLikers() {
  const likes = props.data.likers;
  if (likes === 0) {
    return null;
  }
  
  return (
    <Text style={styles.likes}> 
      {likes} {likes === 1 ? 'curtida' : 'curtidas'}
    </Text>
  );
}

  return (
    <View>
      <View style={styles.viewPerfil}>
        <Image
          resizeMode="cover"
          source={getImageSource(props.data.imgPerfil)}
          style={styles.fotoPerfil}
        />
        <Text style={styles.user}>{props.data.nome}</Text>
      </View>

      <Image
        source={getImageSource(props.data.imgPublicacao)}
        style={styles.fotoPublicacao}
      />

      <View style={styles.AreaBtn}>
        <TouchableOpacity>
          <Image
            source={carregarIconeLike(props.data.likeada)}
            style={styles.iconeLike}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnSend}>
          <Image
            source={require('../img/comment.png')}
            style={styles.iconeLike}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnSend}>
          <Image
            source={require('../img/send.png')}
            style={styles.iconeLike}
          />
        </TouchableOpacity>
      </View>

      {mostraLikers()}

      <Text style={styles.NameRodape}>
        {props.data.nome}
      </Text>

      <Text style={styles.DescRodape}>
        {props.data.descricao}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  viewPerfil: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    padding: 8,
  },
  fotoPerfil: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  user: {
    paddingLeft: 15,
    fontSize: 22,
    color: '#000',
    textAlign: 'left',
  },
  fotoPublicacao: {
    width: '100%',
    height: 400,
    resizeMode: 'cover',
    alignSelf: 'center',
  },
  AreaBtn: {
    flexDirection: 'row',
    padding: 5,
  },
  iconeLike: {
    width: 25,
    height: 25, 
  },
  btnSend: {
    paddingLeft: 10,
  },
  likes: {
    fontWeight: 'bold',
    marginLeft: 10,
  },
  NameRodape: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 5,
  },
  DescRodape : {
    paddingLeft: 6,
    paddingBottom: 10,
    fontSize: 15,
  }
});