import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {
  Header,
  Profile,
  Subject,
  Guru,
  MateriTerbaru,
  Tugas,
  BelajarTerakhir,
  Kategori,
} from '../../components';
import {
  IMBuku,
  IMMath,
  IMBio,
  IMPhys,
  IMChem,
  IMLain,
  IMLine,
} from '../../assets';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Home = () => {
  const semua = 'Semua';
  const matematika = 'Matematika';
  const fisika = 'Fisika';
  const kimia = 'Kimia';
  const biologi = 'Biologi';
  const [kategori, setKategori] = useState(false);
  const clickedKat = () => {
      if(kategori == true){
          setKategori(false);
      }else{
          setKategori(true);
        }
  };
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />
        <View>
          <Profile />
        </View>
        <View style={styles.subjectPage}>
          <View style={styles.subject}>
            <Subject subject="Matematika" />
            <Subject subject="Biologi" />
            <Subject subject="Fisika" />
            <Subject subject="Kimia" />
            <Subject subject="Lainnya" />
          </View>
          <View style={styles.guru}>
            <Guru />
          </View>
        </View>
        <View style={styles.contentMateri}>
          <View style={styles.judul}>
            <Text style={styles.judulMat}>Materi terbaru</Text>
            <Text style={styles.judulLihat}>Lihat Semua</Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.MateriTerbaru}>
              <MateriTerbaru />
              <MateriTerbaru />
              <MateriTerbaru />
              <MateriTerbaru />
            </View>
          </ScrollView>
        </View>
        <View style={styles.contentMateri}>
          <View style={styles.judul}>
            <Text style={styles.judulMat}>Pengumuman Tugas</Text>
            <Text style={styles.judulAngka}>(99+)</Text>
            <Text style={styles.judulLihat}>Lihat Semua</Text>
          </View>
        </View>
        <View>
          <Tugas />
          <Tugas />
        </View>
        <View style={styles.contentMateri}>
          <View style={styles.judul}>
            <Text style={styles.judulMat}>Belajar Terakhir</Text>
            <Text style={styles.judulLihat}>Lihat Semua</Text>
          </View>
        </View>
        <View>
          <BelajarTerakhir />
          <BelajarTerakhir />
          <BelajarTerakhir />
          <BelajarTerakhir />
        </View>
        <View style={styles.pencapaian}>
          <Text style={styles.judulMat}>Hasil Belajarmu</Text>
          <Text style={styles.judulMat}>Hasil Pencapaianmu</Text>
        </View>
        <View style={styles.kat}>
          <View>
            <Kategori mapel="Semua" semua onPress={clickedKat} />
            {kategori && <Image source={IMLine} />}
          </View>
          <View>
          <Kategori mapel="Matematika" matematika />
          {kategori && <Image source={IMLine} />}
          </View>
          <View>
          <Kategori mapel="Fisika" fisika />
          {kategori && <Image source={IMLine} />}
          </View>
          <View>
          <Kategori mapel="Kimia" kimia />
          {kategori && <Image source={IMLine} />}
          </View>
          <View>
          <Kategori mapel="Biologi" biologi />
          {kategori && <Image source={IMLine} />}
          </View>
        </View>
        <View style={styles.garis} />
      </ScrollView>
    </View>
  );
};
export default Home;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f7f7f7',
    flex: 1,
  },
  subjectPage: {
    marginTop: 40,
    flexDirection: 'row',
  },
  subject: {
    width: '70%',
  },
  guru: {
    width: '30%',
    alignItems: 'center',
  },
  MateriTerbaru: {
    flexDirection: 'row',
  },
  judul: {
    flexDirection: 'row',
  },
  judulMat: {
    flex: 1,
    fontSize: 18,
    color: '#000000',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  judulLihat: {
    color: '#4c4bb3',
    marginTop: 6,
  },
  judulAngka: {
    color: '#4c4bb3',
    flex: 1,
  },
  contentMateri: {
    marginTop: 10,
    marginHorizontal: 15,
  },
  pencapaian: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 10,
  },

  garis: {
    height: 1,
    backgroundColor: '#dedede',
    marginVertical: 10,
  },
  kat: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 5,
  },
});
