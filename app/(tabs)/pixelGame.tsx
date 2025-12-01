import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function PixelItScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Oskar <Text style={styles.pixel}>pixelt!</Text></Text>

      <View style={styles.timerBubble}>
        <Text style={styles.timerText}>Noch 12s</Text>
      </View>

      <View style={styles.gridContainer}>
        {[...Array(11)].map((_, rowIdx) => (
          <View key={rowIdx} style={styles.gridRow}>
            {[...Array(11)].map((_, colIdx) => {
              return (
                <View
                  key={colIdx}
                  style={[styles.cell]}
                />
              );
            })}
          </View>
        ))}
      </View>

      <View style={styles.palette}>
        <View style={styles.paletteRow}>
          {['#ff0000','#ff7a00','#ffe600','#4dff00','#00e5ff','#0066ff','#d400ff'].map((c,i)=>(
            <View key={i} style={[styles.colorBox,{backgroundColor:c}]} />
          ))}
        </View>
        <View style={styles.paletteRow}>
          {['#2b2a2a','#000000','#3e3e3e','#7e7e7e','#b4b4b4','#d9d9d9','#ffffff'].map((c,i)=>(
            <View key={i} style={[styles.colorBox,{backgroundColor:c}]} />
          ))}
        </View>
      </View>

      <View style={styles.ratebox}>
        <Text style={styles.rateTitle}>Ratebox</Text>
        <Text style={styles.guess}><Text style={styles.bold}>Lukas:</Text> Wald</Text>
        <Text style={styles.guess}><Text style={styles.bold}>Nele:</Text> Rose</Text>
        <Text style={styles.guess}><Text style={styles.bold}>Lukas:</Text> Baum</Text>
        <Text style={styles.guess}><Text style={styles.bold}>Lukas:</Text> Blume</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 30,
    backgroundColor: '#ffffff'
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    marginBottom: 20
  },
  pixel: {
    color: '#7a42f4'
  },
  timerBubble: {
    backgroundColor: '#e7e7e7',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    marginBottom: 20
  },
  timerText: {
    fontSize: 16,
    fontWeight: '600'
  },
  gridContainer: {
    height: 356,
    width: 356,
    borderWidth: 2,
    borderColor: '#999',
    marginBottom: 30
  },
  gridRow: {
    flexDirection: 'row'
  },
  cell: {
    width: 32,
    height: 32,
    borderWidth: 1,
    borderColor: '#bcbcbc',
    backgroundColor: '#d9d9d9'
  },
  palette: {
    padding: 10,
    backgroundColor: '#e6e6e6',
    borderRadius: 10,
    marginBottom: 30
  },
  paletteRow: {
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'center'
  },
  colorBox: {
    width: 32,
    height: 32,
    borderRadius: 4,
    marginHorizontal: 4
  },
  ratebox: {
    backgroundColor: '#e6e6e6',
    padding: 20,
    width: '85%',
    borderRadius: 12
  },
  rateTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor: '#999'
  },
  guess: {
    fontSize: 16,
    marginVertical: 2
  },
  bold: {
    fontWeight: '700'
  }
});

