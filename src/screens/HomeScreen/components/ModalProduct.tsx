import React, { useState } from 'react';
import { Image, Modal, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from '../../../theme/appTheme';
import { Product } from '../Home';

interface Props {
    product: Product;
    isVisible: boolean;
    setShowModalProduct: () => void;
}

export const ModalProduct = ({ product, isVisible, setShowModalProduct }: Props) => {
    const { width } = useWindowDimensions();
    const [quantity, setQuantity] = useState<number>(1);

    return (
        <Modal
            visible={isVisible}
            animationType='fade'
            transparent={true}
        >
            <View style={styles.containerModal}>
                <View style={{ ...styles.modalProduct, width: width * 0.8 }}>
                    <View style={styles.headerModal}>
                        <Text style={styles.titleHiderModal}>{product.name} - ${product.price}</Text>
                        <View style={styles.IconFrom}>
                            <Icon
                                name='cancel'
                                size={35}
                                color={'#4A2A04'}
                                onPress={setShowModalProduct}
                            />
                        </View>
                    </View>
                    <View>
                        <Image
                            source={{ uri: product.pathImage }}
                            style={styles.imageModal}
                        />
                        <View>
                            {
                                (product.stock === 0)
                                    ? <Text style={styles.textRedirect}>Producto Agotado!</Text>
                                    : <View>
                                        <View style={styles.containerQuantiyy}>
                                            <TouchableOpacity
                                                style={styles.bottonQuantyty}
                                                onPress={() => setQuantity(prev => Math.max(prev - 1, 1))}
                                                disabled={quantity === 1}
                                            >
                                                <Text style={styles.bottoQuantityText}>-1</Text>
                                            </TouchableOpacity>
                                            <Text style={styles.textQuantity}> {quantity} </Text>
                                            <TouchableOpacity
                                                style={styles.bottonQuantyty}
                                                onPress={() => setQuantity(prev => Math.min(prev + 1, product.stock))}
                                                disabled={quantity === product.stock}
                                            >
                                                <Text style={styles.bottoQuantityText}>+1</Text>
                                            </TouchableOpacity>
                                        </View>
                                        <View>
                                            <Text style={styles.textRedirect}>Total: $ {(product.price * quantity).toFixed(2)}</Text>
                                        </View>
                                        <View>
                                            <TouchableOpacity style={styles.bootonAddCard}>
                                                <Text style={styles.textBooton}>Agregar Carrito</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                            }
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    );
};