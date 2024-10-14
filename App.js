import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import Swiper from 'react-native-deck-swiper';


const memorias = [
  {
    nombre: 'DRAM😁',
    capacidad: '4 GB',
    tipo: 'Memoria RAM',
    fecha: '1968',
    ventajas: 'Costo bajo y alta densidad.',
    desventajas: 'Velocidad más baja que SRAM.',
    imagenes: [
      require('./assets/dram1.jpg'),
      require('./assets/dram2.jpg'),
      require('./assets/dram3.avif'), 
    ],
  },
  {
    nombre: 'SDRAM',
    capacidad: '8 GB',
    tipo: 'Memoria RAM',
    fecha: '1993',
    ventajas: 'Sincronización con el reloj del sistema.',
    desventajas: 'Más costosa que DRAM.',
    imagenes: [
      require('./assets/sdram.jpg'),
      require('./assets/sdram2.jpg'),
      require('./assets/sdram3.png'), 
    ],
  },
];

export default function App() {
  const [selectedMemory, setSelectedMemory] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);
  const [allSwiped, setAllSwiped] = useState(false);
  const [swipedMemories, setSwipedMemories] = useState([]);

  const renderCard = (memoria) => (
    <View style={styles.card}>
      <TouchableOpacity onPress={() => setImageIndex((imageIndex + 1) % memoria.imagenes.length)}>
        <Image source={memoria.imagenes[imageIndex]} style={styles.image} />
      </TouchableOpacity>
      <Text style={styles.text}> {memoria.nombre}</Text>
      <Text style={styles.text}>Capacidad: {memoria.capacidad}</Text>
      <Text style={styles.text}>Tipo: {memoria.tipo}</Text>
      <TouchableOpacity style={styles.infoButton} onPress={() => setSelectedMemory(memoria)}>
        <Text style={styles.buttonText}>Más información</Text>
      </TouchableOpacity>
    </View>
  );

  const onSwipe = (index) => {
    setSwipedMemories([...swipedMemories, memorias[index]]);
  };

  const restartApp = () => {
    setSwipedMemories([]);
    setAllSwiped(false);
  };

  return (
    <View style={styles.container}>
      {selectedMemory ? (
        <View style={styles.details}>
          <Text style={styles.detailText}>Nombre: {selectedMemory.nombre}</Text>
          <Text style={styles.detailText}>Fecha: {selectedMemory.fecha}</Text>
          <Text style={styles.detailText}>Ventajas: {selectedMemory.ventajas}</Text>
          <Text style={styles.detailText}>Desventajas: {selectedMemory.desventajas}</Text>
          <TouchableOpacity style={styles.backButton} onPress={() => setSelectedMemory(null)}>
            <Text style={styles.buttonText}>Regresar</Text>
          </TouchableOpacity>
        </View>
      ) : allSwiped ? (
        <View style={styles.details}>
          <Text style={styles.text}>Has visto todas las memorias.</Text>
          <TouchableOpacity style={styles.restartButton} onPress={restartApp}>
            <Text style={styles.buttonText}>Reiniciar</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <Swiper
          cards={memorias}
          renderCard={renderCard}
          onSwiped={onSwipe}
          onSwipedAll={() => setAllSwiped(true)}
          cardIndex={0}
          backgroundColor={'#3a2b61'}
          stackSize={3}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4A154B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: 350,
    height: 700,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#62176A',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  image: {
    width: 330,
    height: 500,
    borderRadius: 15,
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    color: '#e8a4d2',
  },
  infoButton: {
    backgroundColor: '#C7C7FF',
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  details: {
    padding: 20,
    alignItems: 'center',
  },
  detailText: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 10,
  },
  backButton: {
    backgroundColor: '#FFC7FF',
    padding: 10,
    borderRadius: 8,
    marginTop: 20,
  },
  restartButton: {
    backgroundColor: '#21D4F8',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
});
