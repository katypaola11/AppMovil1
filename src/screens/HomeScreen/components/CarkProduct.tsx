import React, { useState } from 'react';
import { Image, Text, View } from 'react-native';
import { styles } from '../../../theme/appTheme';

import  Icon  from 'react-native-vector-icons/MaterialIcons';
import { ModalProduct } from './ModalProduct';
import { Product } from '../Home';

interface Props{
    product: Product
}

export const CarkProduct= ({product}: Props) => {
  //hook useSate
  const [showModalProduct, setShowModalProduct] = useState<boolean>(false)
  return (
<View>
  
    <View style={styles.containerCard}>
        <Image
        source={{uri:product.pathImage}} style={styles.imagenCard}
    />
    
    <View style={styles.imagenCard}>
      <Text >{product.name}</Text>
      <Text>Precio: ${product.price}</Text>
      </View>
      <View>
      </View>
      <Icon 
      name='add-shopping-cart'
      size={30}
      style={styles.containerIcon}
      onPress={()=>setShowModalProduct(!showModalProduct)}/>
   
      
    </View>
    <ModalProduct 
    product={product} 
    isVisible={showModalProduct}
    setShowModalProduct={()=> setShowModalProduct(!showModalProduct)}/>
</View>
  );
};