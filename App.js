import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import Swiper from 'react-native-deck-swiper';


const memorias = [
  {
    nombre: 'RAM 😎',
    capacidad: '4 GB - 64 GB',
    tipo: 'Memoria RAM',
    velocidad: '2400 MT/s - 3200 MT/s',
    fecha: '1950',
    descripcion: 'Soy una memoria volátil que permite que tu dispositivo almacene datos temporales mientras esté encendido. ¡Ojo, que si me apagas, pierdo toda mi información!',
    imagenes: [
      require('./assets/ram1.png'),
      require('./assets/ram2.png'),
      require('./assets/ram3.png')
    ]
  },
  {
    nombre: 'DRAM 😁',
    capacidad: '1 GB - 16 GB',
    tipo: 'Memoria RAM',
    velocidad: '1600 MT/s - 3200 MT/s',
    fecha: '1966',
    descripcion: 'Me conocen por ser la memoria dinámica que necesita un refresco constante, lo cual es una gran desventaja. Sin embargo, soy barata y con gran capacidad, pero cuidado, porque soy más lenta que la SRAM.',
    imagenes: [
      require('./assets/dram1.jpg'),
      require('./assets/dram2.jpg'),
      require('./assets/dram3.jpg')
    ]
  },
  {
    nombre: 'SDRAM ⚡',
    capacidad: '256 MB - 16 GB',
    tipo: 'Memoria RAM',
    velocidad: '66 MHz - 2133 MHz',
    fecha: '1992',
    descripcion: 'Trabajo a la par del reloj del sistema, sincronizando todo a la perfección para mejorar el acceso a datos. Aunque, claro, mi consumo de energía es un poco mayor, a parte de que mi costo es mayor al de la DRAM.',
    imagenes: [
      require('./assets/sdram.jpg'),
      require('./assets/sdram2.jpg'),
      require('./assets/sdram3.png')
    ]
  },
  {
    nombre: 'DDR SDRAM 🚀',
    capacidad: '512 MB a 128 GB',
    velocidad: '266 MT/s - 6400 MT/s',
    tipo: 'Memoria RAM',
    fecha: '1998',
    descripcion: '¡Velocidad es mi segundo nombre! Conmigo los datos se transfieren en ambos flancos del reloj, duplicando la velocidad de transmisión. Eso sí, no soy tan rápida como DDR4 o DDR5.',
    imagenes: [
      require('./assets/ddr1.jpg'),
      require('./assets/ddr2.jpg'),
      require('./assets/ddr3.jpg')
    ]
  },
  {
    nombre: 'RDRAM 🏎️',
    capacidad: '64 MB - 512 MB',
    tipo: 'Memoria RAM',
    velocidad: '400 MHz - 800 MHz',
    fecha: 'Finales de los 90s',
    descripcion: 'Soy la memoria de alto rendimiento de mi época. Aunque fui rápida y potente, no soy muy popular debido a mi alto costo y producción de calor. ',
    imagenes: [
      require('./assets/rdram1.jpg'),
      require('./assets/rdram2.jpg'),
      require('./assets/rdram3.jpg')
    ]
  },
  {
    nombre: 'SRAM 📚',
    capacidad: '256 KB',
    tipo: 'Memoria RAM',
    velocidad: '1 GHz',
    fecha: '1963',
    descripcion: 'Soy una memoria que no necesita refrescarse constantemente como la DRAM. Suelo ser el caché de tu CPU y puedo mantener los datos con bajo consumo de energía por largo tiempo.',
    imagenes: [
      require('./assets/sram1.jpg'),
      require('./assets/sram2.jpg'),
      require('./assets/sram3.jpg')
    ]
  },
  {
    nombre: 'ROM 📀',
    capacidad: '32 KB',
    tipo: 'Memoria ROM',
    velocidad: '50 a 150 ns',
    fecha: '1948',
    descripcion: 'Mis datos no se pueden modificar fácilmente. Guardo la información esencial, como el firmware, y aunque no me puedas cambiar, siempre estaré lista para leerse.',
    imagenes: [
      require('./assets/rom1.jpg'),
      require('./assets/rom2.jpg'),
      require('./assets/rom3.jpg')
    ]
  },
  {
    nombre: 'EEPROM ✏️',
    capacidad: '1 KB - 128 KB',
    tipo: 'Memoria ROM',
    velocidad: '1 - 10 ms',
    fecha: '1971',
    descripcion: 'Soy una versión especial de la ROM. Puedo ser borrada y reprogramada eléctricamente, guardo pequeñas cantidades de datos y me reprograman con facilidad. ¡Me encanta adaptarme!',
    imagenes: [
      require('./assets/eeprom1.jpg'),
      require('./assets/eeprom2.jpg'),
      require('./assets/eeprom3.jpg')
    ]
  },
  {
    nombre: 'CMOS 💡',
    capacidad: '64 KB / 1 MB',
    tipo: 'Memoria de semiconductores',
    velocidad: '100 ns a 1 ms',
    fecha: '1963',
    descripcion: 'Yo controlo el BIOS y la configuración básica de tu sistema. Uso muy poca energía, pero manejo voltajes y puedo mantener la información mientras el dispositivo esté en reposo.',
    imagenes: [
      require('./assets/cmos1.jpg'),
      require('./assets/cmos2.jpg'),
      require('./assets/cmos3.jpg')
    ]
  },
  {
    nombre: 'Memoria Caché 🧠',
    capacidad: '32 KB - 8 MB',
    tipo: 'Memoria RAM',
    velocidad: '1 ns - 10 ns',
    fecha: 'Década de 1980',
    descripcion: 'Soy la memoria que guarda temporalmente los datos más usados para que el CPU no tenga que ir lejos a buscarlos. Mi trabajo es hacer todo más rápido y eficiente.',
    imagenes: [
      require('./assets/cache1.jpg'),
      require('./assets/cache2.jpg'),
      require('./assets/cache3.jpg')
    ]
  }
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
      <View style={styles.tagsContainer}>
          <View style={styles.tag}>
            <Text style={styles.tagText}>{memoria.tipo}</Text>
          </View>
          <View style={styles.tag}>
            <Text style={styles.tagText}>{memoria.capacidad}</Text>
          </View>
          <View style={styles.tag}>
            <Text style={styles.tagText}>{memoria.velocidad}</Text>
          </View>

        </View>

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
          <Text style={styles.detailText}> {selectedMemory.nombre}</Text>
          <Text style={styles.detailText}>Fecha: {selectedMemory.fecha}</Text>
          <Text style={styles.detailText}> {selectedMemory.descripcion}</Text>
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
    height: 600,
    justifyContent: 'center', 
    alignItems: 'center',
    borderRadius: 15,
    marginTop:35,
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    color: '#e8a4d2',
  },
  infoButton: {
    backgroundColor: '#C7C7FF',
    padding: 10,
    borderRadius: 8,
    marginTop: 0,
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
  

  tagsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,

  },
  tag: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)', 
    padding: 5,
    borderRadius: 20,
    marginRight: 5,
  },
  tagText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
});
