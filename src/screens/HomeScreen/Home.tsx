import React from 'react';
import { FlatList, StatusBar, Text, View } from 'react-native';
import { CarkProduct } from './components/CarkProduct';

export interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  pathImage: string;
  descripcion: string;
}

export const Home = () => {
  const products: Product[] = [
    { id: 1, name: "Hamburguesa Simple", price: 3.00, stock: 20, pathImage: "https://img.hogar.mapfre.es/wp-content/uploads/2018/09/hamburguesa-sencilla.jpg", descripcion: "Hamburguesa con carne, lechuga y tomate" },
    { id: 2, name: "Hamburguesa Doble", price: 5.00, stock: 15, pathImage: "https://www.pronacatqma.com/images/com_yoorecipe/banner_superior/15075_1.jpg", descripcion: "Dos carnes, lechuga, tomate y queso" },
    { id: 3, name: "Hamburguesa Vegetariana", price: 6.00, stock: 10, pathImage: "https://www.conasi.eu/blog/wp-content/uploads/2022/05/hamburguesa-vegana-1.jpg", descripcion: "Hamburguesa de garbanzos con vegetales" },
    { id: 4, name: "Papas Fritas", price: 3.50, stock: 30, pathImage: "https://lacocinalatina.club/wp-content/uploads/2020/07/Patatas-Fritas-Rusticas-La-Cocina-Latina.jpg", descripcion: "Papas fritas crujientes" },
    { id: 5, name: "Papas Fritas a la Francesa", price: 3.80, stock: 25, pathImage: "https://cocina-casera.com/wp-content/uploads/2023/01/patatas-fritas-crujientes-francesa-1.jpg", descripcion: "Papas fritas clásicas, finas y crujientes." },
    { id: 6, name: "Limonada", price: 7.00, stock: 12, pathImage: "https://www.manabiche.com/wp-content/uploads/2020/05/limonadav2.jpg", descripcion: "Bebida refrescante hecha de limón, agua y azúcar." },
    { id: 7, name: "Gaseosa Personal", price: 2.50, stock: 18, pathImage: "https://tiptop.com.pe/wp-content/uploads/2023/06/Gaseosas-personales-scaled.jpg", descripcion: "Bebida carbonatada en presentación individual." },
    { id: 8, name: "Batido", price: 3.00, stock: 20, pathImage: "https://s2.abcstatics.com/media/bienestar/2020/07/04/batidos-saludables-kdhH--1248x698@abc.jpeg", descripcion: "Bebida fría hecha de frutas, leche o yogurt" },
    { id: 9, name: "Ensalada de Aguacate", price: 3.50, stock: 8, pathImage: "https://www.mycolombianrecipes.com/wp-content/uploads/2009/03/Ensalada-de-Aguacate.jpg", descripcion: "Hamburguesa con jalapeños y salsa picante" },
    { id: 10, name: "Ensalada César", price: 4.50, stock: 15, pathImage: "https://imag.bonviveur.com/ensalada-de-lechuga-y-tomate-foto-cerca.jpg", descripcion: "Ensalada fresca con pollo y aderezo César" }
  ];

  return (
    <View>
      <StatusBar  />
      <Text> Comida Rapida Menu</Text>
   
        <FlatList
          data={products}
          renderItem={({ item }) => <CarkProduct product={item} />}
          keyExtractor={item => item.id.toString()}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
        />
      
    </View>
  );
};