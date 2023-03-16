import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  Image,
  Font,
  StyleSheet,
} from "@react-pdf/renderer";
import logo from "../src/Img/danamasImg.png";
import roboto from "./fonts/Roboto-Bold.ttf";

// let data = [
//   {
//     barang: "A",
//     nilai: 100,
//   },
//   {
//     barang: "B",
//     nilai: 200,
//   },
//   {
//     barang: "C",
//     nilai: 300,
//   },
//   {
//     barang: "D",
//     nilai: 400,
//   },
//   {
//     barang: "E",
//     nilai: 500,
//   },
//   {
//     barang: "F",
//     nilai: 600,
//   },
// ];
const PDF = () => (
  <Document>
    <Page style={styles.body}>
      {/* START : LOGO */}
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <Image style={{ height: 20 }} src={logo} />
          <Text
            style={{
              fontSize: 4,
              textAlign: "center",
            }}
          >
            VER.01.2020
          </Text>
        </View>
      </View>
      {/* END : LOGO */}

      {/* START : TABEL PERTAMA */}
      <View>
        <View style={styles.borderFull}>
          <Text
            style={[
              styles.text,
              {
                textAlign: "center",
                backgroundColor: "#CECECE",
                fontSize: 10,
                height: "100%",
              },
            ]}
          >
            LAPORAN HASIL PENILAIAN AGUNAN
          </Text>
        </View>
        <View style={styles.borderFullWithFlex}>
          <View style={[styles.trLeft, { width: "33.42%" }]}>
            <Text>No. Laporan</Text>
            <Text>:</Text>
          </View>
          <View style={styles.tr}>
            <Text>xxxxxxxxxx</Text>
          </View>
        </View>
        <View style={styles.borderFull}>
          <Text style={styles.text}>I. PELAKSANAAN PEKERJAAN</Text>
        </View>
        <View style={styles.borderFullWithFlex}>
          <View style={styles.trLeft}>
            <Text>Penilai</Text>
            <Text>:</Text>
          </View>
          <View style={styles.tr}>
            <Text>Agung Waluya</Text>
          </View>
          <View style={styles.trLeft}>
            <Text>Email</Text>
            <Text>:</Text>
          </View>
          <View style={styles.tr}>
            <Text>abc@abc.com</Text>
          </View>
        </View>
        <View style={styles.borderFull}>
          <Text>
            Dengan ini disampaikan laporan penilaian atas aset sebagai berikut :
          </Text>
        </View>
        <View style={styles.borderFullWithFlex}>
          <View style={[styles.trLeft, { width: "33.42%" }]}>
            <Text>Debitur</Text>
          </View>
          <View style={styles.tr}>
            <Text>xxxxxxx</Text>
          </View>
        </View>
        <View style={styles.borderLeftRightWithFlex}>
          <View style={[styles.trLeft, { width: "33.42%" }]}>
            <Text>Jenis Objek</Text>
            <Text>:</Text>
          </View>
          <View style={styles.tr}>
            <Text>Rumah Tinggal</Text>
          </View>
        </View>
        <View style={styles.borderLeftRightWithFlex}>
          <View style={[styles.trLeft, { width: "33.42%" }]}>
            <Text>Alamat Object Sesuai Fisik</Text>
            <Text>:</Text>
          </View>
          <View style={styles.tr}>
            <Text>xxxxxxxxx</Text>
          </View>
        </View>
        <View style={[styles.borderFullWithFlex, { height: 20 }]}>
          <View style={styles.trLeft}>
            <Text>Tanggal Order</Text>
            <Text>:</Text>
          </View>
          <View style={styles.tr}>
            <Text>xxxxxxx</Text>
          </View>
          <View style={styles.trLeft}>
            <Text>Tujuan Penilaian</Text>
            <Text>:</Text>
          </View>
          <View style={styles.tr}>
            <Text>Jaminan Kredit di PT.Bank Danamas, Tbk</Text>
          </View>
        </View>
        <View style={styles.borderLeftRightWithFlex}>
          <View style={styles.trLeft}>
            <Text>Tanggal Penilaian</Text>
            <Text>:</Text>
          </View>
          <View style={styles.tr}>
            <Text>xxxxxxx</Text>
          </View>
          <View style={styles.trLeft}>
            <Text>Pendekatan Penilaian</Text>
            <Text>:</Text>
          </View>
          <View style={styles.tr}>
            <Text>Pendekatan Biaya</Text>
          </View>
        </View>
        <View
          style={[
            styles.borderLeftRightWithFlex,
            { marginBottom: 10, borderBottom: 1 },
          ]}
        >
          <View style={styles.trLeft}>
            <Text>Tanggal Laporan</Text>
            <Text>:</Text>
          </View>
          <View style={styles.tr}>
            <Text>06 Februari 2023</Text>
          </View>
          <View style={styles.trLeft}>
            <Text></Text>
            <Text></Text>
          </View>
          <View style={styles.tr}>
            <Text></Text>
          </View>
        </View>
      </View>
      {/* END : TABEL PERTAMA */}

      {/* START : TABEL KEDUA */}
      <View>
        <View style={styles.borderFull}>
          <Text style={styles.text}>II. RINGKASAN HASIL PENILAIAN</Text>
        </View>
        <View style={styles.borderFull}>
          <Text style={styles.text}>Nilai Pasar Sesuai IMB</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            borderColor: "#000000",
            borderLeftWidth: 1,
            borderRightWidth: 1,
            borderTopWidth: 1,
            width: "100%",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              width: "50%",
              height: "100%",
              fontSize: 8,
              padding: "0px 5px 0px 5px",
              borderColor: "#000000",
              // borderTopWidth: 1,
              borderBottomWidth: 1,
              // borderLeftWidth: 1,
              borderRightWidth: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={[styles.text, { textAlign: "center" }]}>Object</Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              width: "50%",
              height: "100%",
              fontSize: 8,
              padding: "0px 5px 0px 5px",
              borderColor: "#000000",
              // borderTopWidth: 1,
              borderBottomWidth: 1,
              // borderLeftWidth: 1,
              // borderRightWidth: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={styles.text}>Luas (m{"\u00B2"})</Text>
          </View>

          <View style={styles.tr}>
            <View
              style={{
                // flexDirection: "row",
                borderColor: "#000000",
                // borderTopWidth: 1,
                borderLeftWidth: 1,
                borderRightWidth: 1,
                height: 25,
                width: 200,
                fontSize: 8,
                textAlign: "center",
              }}
            >
              <Text style={styles.text}>Nilai Pasar</Text>
              <View style={{ flexDirection: "row" }}>
                <View
                  style={{
                    borderColor: "#000000",
                    borderTopWidth: 1,
                    borderBottomWidth: 1,
                    // borderLeftWidth: 1,
                    borderRightWidth: 1,
                    height: 15,
                    width: "100%",
                    fontSize: 8,
                    textAlign: "center",
                  }}
                >
                  <Text style={styles.fonts}>Nilai/m{"\u00B2"} (Rp.)</Text>
                </View>
                <View
                  style={{
                    borderColor: "#000000",
                    borderTopWidth: 1,
                    borderBottomWidth: 1,
                    // borderLeftWidth: 1,
                    // borderRightWidth: 1,
                    height: 15,
                    width: "100%",
                    fontSize: 8,
                    textAlign: "center",
                  }}
                >
                  <Text>Total (Rp.)</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.tr}>
            <View
              style={{
                // flexDirection: "row",
                borderColor: "#000000",
                // borderTopWidth: 1,
                // borderLeftWidth: 1,
                borderRightWidth: 1,
                height: 25,
                width: 200,
                fontSize: 8,
                textAlign: "center",
              }}
            >
              <Text style={styles.text}>Indikasi Nilai Likuidasi</Text>
              <View style={{ flexDirection: "row" }}>
                <View
                  style={{
                    borderColor: "#000000",
                    borderTopWidth: 1,
                    borderBottomWidth: 1,
                    // borderLeftWidth: 1,
                    borderRightWidth: 1,
                    height: 15,
                    width: "100%",
                    fontSize: 8,
                    textAlign: "center",
                  }}
                >
                  <Text>Nilai/m{"\u00B2"} (Rp.)</Text>
                </View>
                <View
                  style={{
                    borderColor: "#000000",
                    borderTopWidth: 1,
                    borderBottomWidth: 1,
                    // borderLeftWidth: 1,
                    // borderRightWidth: 1,
                    height: 15,
                    width: "100%",
                    fontSize: 8,
                    textAlign: "center",
                  }}
                >
                  <Text>Total (Rp.)</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.borderLeftRightWithFlex}>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>Tanah</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "right",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>200,000</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "right",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>9.600.000</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "right",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>1.920.000.000</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "right",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>6.720.000</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "right",
            }}
          >
            <Text>1.344.000.000</Text>
          </View>
        </View>
        <View style={styles.borderFullWithFlex}>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>Rumah 1</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "right",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>200,000</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "right",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>9.600.000</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "right",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>1.920.000.000</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "right",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>6.720.000</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "right",
            }}
          >
            <Text>1.344.000.000</Text>
          </View>
        </View>

        <View
          style={[
            styles.borderFullWithFlex,
            { borderBottom: 1, marginBottom: 10 },
          ]}
        >
          <View
            style={{
              width: "50%",
              height: "100%",
              fontSize: 8,
              borderColor: "#000000",
              borderRightWidth: 1,
              textAlign: "center",
            }}
          >
            <Text style={styles.text}>TOTAL SETELAH PENYESUAIAN PERATURAN</Text>
          </View>
          <View
            style={{
              width: "16.67%",
              height: "100%",
              fontSize: 8,
              textAlign: "right",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>3.433.200.000</Text>
          </View>
          <View
            style={{
              width: "16.67%",
              height: "100%",
              fontSize: 8,
              textAlign: "right",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text></Text>
          </View>
          <View
            style={{
              width: "16.67%",
              height: "100%",
              textAlign: "right",
              fontSize: 8,
              borderColor: "#000000",
            }}
          >
            <Text>3.433.200.000</Text>
          </View>
        </View>
      </View>
      {/* END : TABEL KEDUA */}

      {/* START : TABEL KETIGA */}
      <View>
        <View style={styles.borderFull}>
          <Text style={styles.text}>Sesuai Fisik Peraturan</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            borderColor: "#000000",
            borderLeftWidth: 1,
            borderRightWidth: 1,
            borderTopWidth: 1,
            width: "100%",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              width: "50%",
              height: "100%",
              fontSize: 8,
              padding: "0px 5px 0px 5px",
              borderColor: "#000000",
              // borderTopWidth: 1,
              borderBottomWidth: 1,
              // borderLeftWidth: 1,
              borderRightWidth: 1,
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <Text style={styles.text}>Object</Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              width: "50%",
              height: "100%",
              fontSize: 8,
              padding: "0px 5px 0px 5px",
              borderColor: "#000000",
              // borderTopWidth: 1,
              borderBottomWidth: 1,
              // borderLeftWidth: 1,
              // borderRightWidth: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={styles.text}>Luas (m{"\u00B2"})</Text>
          </View>

          <View style={styles.tr}>
            <View
              style={{
                // flexDirection: "row",
                borderColor: "#000000",
                // borderTopWidth: 1,
                borderLeftWidth: 1,
                borderRightWidth: 1,
                height: 25,
                width: 200,
                fontSize: 8,
                textAlign: "center",
              }}
            >
              <Text style={styles.text}>Nilai Pasar</Text>
              <View style={{ flexDirection: "row" }}>
                <View
                  style={{
                    borderColor: "#000000",
                    borderTopWidth: 1,
                    borderBottomWidth: 1,
                    // borderLeftWidth: 1,
                    borderRightWidth: 1,
                    height: 15,
                    width: "100%",
                    fontSize: 8,
                    textAlign: "center",
                  }}
                >
                  <Text style={styles.fonts}>Nilai/m{"\u00B2"} (Rp.)</Text>
                </View>
                <View
                  style={{
                    borderColor: "#000000",
                    borderTopWidth: 1,
                    borderBottomWidth: 1,
                    // borderLeftWidth: 1,
                    // borderRightWidth: 1,
                    height: 15,
                    width: "100%",
                    fontSize: 8,
                    textAlign: "center",
                  }}
                >
                  <Text>Total (Rp.)</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.tr}>
            <View
              style={{
                // flexDirection: "row",
                borderColor: "#000000",
                // borderTopWidth: 1,
                // borderLeftWidth: 1,
                borderRightWidth: 1,
                height: 25,
                width: 200,
                fontSize: 8,
                textAlign: "center",
              }}
            >
              <Text style={styles.text}>Indikasi Nilai Likuidasi</Text>
              <View style={{ flexDirection: "row" }}>
                <View
                  style={{
                    borderColor: "#000000",
                    borderTopWidth: 1,
                    borderBottomWidth: 1,
                    // borderLeftWidth: 1,
                    borderRightWidth: 1,
                    height: 15,
                    width: "100%",
                    fontSize: 8,
                    textAlign: "center",
                  }}
                >
                  <Text>Nilai/m{"\u00B2"} (Rp.)</Text>
                </View>
                <View
                  style={{
                    borderColor: "#000000",
                    borderTopWidth: 1,
                    borderBottomWidth: 1,
                    // borderLeftWidth: 1,
                    // borderRightWidth: 1,
                    height: 15,
                    width: "100%",
                    fontSize: 8,
                    textAlign: "center",
                  }}
                >
                  <Text>Total (Rp.)</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.borderLeftRightWithFlex}>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>Tanah</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "right",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>200,000</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "right",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>9.600.000</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "right",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>1.920.000.000</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "right",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>6.720.000</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "right",
            }}
          >
            <Text>1.344.000.000</Text>
          </View>
        </View>
        <View style={styles.borderFullWithFlex}>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>Rumah 1</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "right",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>200,000</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "right",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>9.600.000</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "right",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>1.920.000.000</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "right",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>6.720.000</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "right",
            }}
          >
            <Text>1.344.000.000</Text>
          </View>
        </View>
        <View style={styles.borderFullWithFlex}>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>Rumah 2</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "right",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>200,000</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "right",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>9.600.000</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "right",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>1.920.000.000</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "right",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>6.720.000</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "right",
            }}
          >
            <Text>1.344.000.000</Text>
          </View>
        </View>
        <View style={styles.borderFullWithFlex}>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>Rumah 3</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "right",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>200,000</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "right",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>9.600.000</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "right",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>1.920.000.000</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "right",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>6.720.000</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "right",
            }}
          >
            <Text>1.344.000.000</Text>
          </View>
        </View>
        <View style={styles.borderFullWithFlex}>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>Rumah 4</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "right",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>200,000</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "right",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>9.600.000</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "right",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>1.920.000.000</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "right",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>6.720.000</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "right",
            }}
          >
            <Text>1.344.000.000</Text>
          </View>
        </View>
        <View style={styles.borderFullWithFlex}>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>Rumah 5</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "right",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>200,000</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "right",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>9.600.000</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "right",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>1.920.000.000</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "right",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>6.720.000</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "right",
            }}
          >
            <Text>1.344.000.000</Text>
          </View>
        </View>
        <View style={styles.borderFullWithFlex}>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>Sarana Pelengkap</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "right",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text></Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "right",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text></Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "right",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>44.000.000</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "right",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text></Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "right",
            }}
          >
            <Text></Text>
          </View>
        </View>
        <View
          style={[
            styles.borderFullWithFlex,
            { borderBottom: 1, marginBottom: 10 },
          ]}
        >
          <View
            style={{
              width: "50%",
              height: "100%",
              fontSize: 8,
              borderColor: "#000000",
              borderRightWidth: 1,
              textAlign: "center",
            }}
          >
            <Text style={styles.text}>TOTAL SESUAI FISIK REAL</Text>
          </View>
          <View
            style={{
              width: "16.67%",
              height: "100%",
              fontSize: 8,
              textAlign: "right",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>3.433.200.000</Text>
          </View>
          <View
            style={{
              width: "16.67%",
              height: "100%",
              fontSize: 8,
              textAlign: "right",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text></Text>
          </View>
          <View
            style={{
              width: "16.67%",
              height: "100%",
              textAlign: "right",
              fontSize: 8,
              borderColor: "#000000",
            }}
          >
            <Text>3.433.200.000</Text>
          </View>
        </View>
      </View>
      {/* END : TABEL KETIGA */}

      {/* START : TABEL KEEMPAT */}
      <View break>
        <View style={[styles.borderFull, { height: 20 }]}>
          <Text style={{ paddingRight: 8 }}>
            Sesuai dengan inspeksi yang telah kami lakukan, mencakup analisa
            situasi (site data), lingkungan dan pengembangan area serta
            pemanfaatan dari properti saat ini, maka kami berpendapat bahwa :
          </Text>
        </View>
        <View style={styles.borderLeftRight}>
          <Text style={[styles.text, { textDecoration: "underline" }]}>
            Nilai Pasar :
          </Text>
        </View>
        <View style={styles.borderLeftRight}>
          <Text style={[styles.text, { textAlign: "center" }]}>
            Rp 3.433.200.000
          </Text>
        </View>
        <View style={styles.borderLeftRight}>
          <Text style={[styles.text, { textAlign: "center" }]}>
            TIGA MILYAR EMPAT RATUS TIGA PULUH TIGA JUTA DUA RATUS RIBU RUPIAH
          </Text>
        </View>
        <View style={styles.borderLeftRight}>
          <Text style={[styles.text, { textDecoration: "underline" }]}>
            INDIKASI NILAI LIKUIDASI
          </Text>
        </View>
        <View style={styles.borderLeftRight}>
          <Text style={[styles.text, { textAlign: "center" }]}>
            Rp 2.7432.590.000
          </Text>
        </View>
        <View style={styles.borderLeftRight}>
          <Text style={[styles.text, { textAlign: "center" }]}>
            DUA MILYAR TUJUH RATUS DUA JUTA LIMA RATUS SEMBILAN PULUH RIBU
            RUPIAH
          </Text>
        </View>
        <View
          style={[
            styles.borderLeftRight,
            {
              paddingRight: 8,
              paddingTop: 20,
              paddingBottom: 20,
            },
          ]}
        >
          <Text>
            Saya/kami menjamin bahwa penilaian ini telah dilakukan dengan penuh
            kejujuran dan tanggung jawab serta dengan penuh keyakinan dan
            kemampuan ilmu yang saya/kami kuasai sesuai profesi selaku penilai
            properti tanpa adanya pengaruh atau tekanan apapun.
          </Text>
        </View>
        <View style={[styles.borderLeftRight, { height: 40 }]}>
          <Text style={{ paddingTop: 20, marginLeft: 20 }}>Hormat Kami,</Text>
        </View>
        <View style={[styles.borderLeftRightWithFlex, { height: 50 }]}>
          <View style={[styles.trLeft, { paddingHorizontal: 28 }]}>
            <Text>Apprisal</Text>
            <Text>Approval</Text>
          </View>
        </View>
        <View
          style={[
            styles.borderLeftRightWithFlex,
            { borderBottomWidth: 1, marginBottom: 10 },
          ]}
        >
          <View style={[styles.trLeft, { paddingHorizontal: 20 }]}>
            <Text style={{ textDecoration: "underline" }}>Agung Waluyo</Text>
            <Text style={{ textDecoration: "underline", marginRight: 10 }}>
              Vacant
            </Text>
          </View>
        </View>
      </View>
      <View break></View>
      {/* END : TABEL KEEMPAT */}

      {/* START : TABEL KELIMA */}

      {/* END : TABEL KELIMA */}

      {/* START : TABEL KEENAM */}
      <View style={{ marginBottom: 10, borderBottomWidth: 1 }}>
        <View style={styles.borderFull}>
          <Text style={styles.text}>III. LAPORAN HASIL PEMERIKSAAN</Text>
        </View>
        <View style={styles.borderFull}>
          <Text style={[styles.text, { textAlign: "center" }]}>OBJEK</Text>
        </View>
        <View style={styles.borderFullWithFlex}>
          <View style={[styles.trLeft, { width: "33.5%" }]}>
            <Text>Jenis Objek</Text>
            <Text>:</Text>
          </View>
          <View style={styles.tr}>
            <Text>Rumah Tinggal</Text>
          </View>
        </View>
        <View style={styles.borderLeftRightWithFlex}>
          <View style={[styles.trLeft, { width: "33.5%" }]}>
            <Text>Alamat Object Sesuai Fisik</Text>
            <Text>:</Text>
          </View>
          <View style={styles.tr}>
            <Text>
              xxxxxxxxx, Kelurahan Pondok Jaya, Kecamatan Pondok Aren, Kota
              Tanggerang Selatan, Propinsi BANTEN
            </Text>
          </View>
        </View>
        <View style={styles.borderLeftRightWithFlex}>
          <View style={styles.trLeft}>
            <Text>Yang dijumpai</Text>
            <Text>:</Text>
          </View>
          <View style={styles.tr}>
            <Text>xxxxxxxxx</Text>
          </View>
          <View style={styles.trLeft}>
            <Text>PIC MobilePhone</Text>
            <Text>:</Text>
          </View>
          <View style={styles.tr}>
            <Text>xxxxxxxxxxxx</Text>
          </View>
        </View>
        <View style={styles.borderLeftRightWithFlex}>
          <View style={styles.trLeft}>
            <Text>Status Objek</Text>
            <Text>:</Text>
          </View>
          <View style={styles.tr}>
            <Text>Kosong</Text>
          </View>
          <View style={styles.trLeft}>
            <Text>Dihuni Sejak</Text>
            <Text>:</Text>
          </View>
          <View style={styles.tr}>
            <Text>xxxxxxxx</Text>
          </View>
        </View>
        <View style={styles.borderLeftRightWithFlex}>
          <View style={styles.trLeft}>
            <Text>Dihuni oleh</Text>
            <Text>:</Text>
          </View>
          <View style={styles.tr}>
            <Text>xxxxxxxx</Text>
          </View>
          <View style={styles.trLeft}>
            <Text>Disewa Hingga</Text>
            <Text>:</Text>
          </View>
          <View style={styles.tr}>
            <Text>xxxxxxxx</Text>
          </View>
        </View>
        <View style={styles.borderLeftRightWithFlex}>
          <View style={[styles.trLeft, { width: "33.5%" }]}>
            <Text>Alasan Tinggal</Text>
            <Text>:</Text>
          </View>
          <View style={styles.tr}>
            <Text>Kosong</Text>
          </View>
        </View>
      </View>
      {/* END : TABEL KEENAM */}

      {/* START : TABEL KETUJUH */}
      <View style={{ borderBottomWidth: 1, marginBottom: 10 }}>
        <View style={styles.borderFull}>
          <Text style={[styles.text, { textAlign: "center" }]}>DATA LEGAL</Text>
        </View>
        <View style={styles.borderFull}>
          <Text style={styles.text}>LEGALITAS KEPEMILIKAN</Text>
        </View>
        <View style={styles.borderFullWithFlex}>
          <View style={[styles.trLeft, { width: "33.5%" }]}>
            <Text>Nama Jalan Sesuai Sertipikat</Text>
            <Text>:</Text>
          </View>
          <View style={styles.tr}>
            <Text>xxxxxxx</Text>
          </View>
        </View>
        <View style={styles.borderLeftRightWithFlex}>
          <View style={[styles.trLeft, { width: "33.5%" }]}>
            <Text>Nomor Identifikasi Bidang (NIB)</Text>
            <Text>:</Text>
          </View>
          <View style={styles.tr}>
            <Text>xxxxxxxx</Text>
          </View>
        </View>
        <View style={styles.borderFullWithFlex}>
          <View
            style={{
              width: "25%",
              fontSize: 8,
              borderColor: "#000000",
              textAlign: "center",
              borderRightWidth: 1,
            }}
          >
            <Text style={styles.text}>No.</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text style={styles.text}>Jenis Dokumen</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text style={styles.text}>No.Dokumen</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text style={styles.text}>Atas Nama</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text style={styles.text}>Tgl Terbit</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text style={styles.text}>Tgl akhir Hak</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text style={styles.text}>No./Tgl GS/SU</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text style={styles.text}>Luas</Text>
          </View>
        </View>
        <View style={styles.borderFullWithFlex}>
          <View
            style={{
              width: "25%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>1</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>SHM</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>xxxxxx</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>xxxxxx</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>xxxxxxx</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>xxxxxxx</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>xxxxxxxx</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>xxxxxxxx</Text>
          </View>
        </View>
        <View style={styles.borderFullWithFlex}>
          <View
            style={{
              width: "25%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>2</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>SHM</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>xxxxxx</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>xxxxxx</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>xxxxxxx</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>xxxxxxx</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>xxxxxxxx</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>xxxxxxxx</Text>
          </View>
        </View>
        <View style={styles.borderFullWithFlex}>
          <View
            style={{
              width: "25%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>3</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>SHM</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>xxxxxx</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>xxxxxx</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>xxxxxxx</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>xxxxxxx</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>xxxxxxxx</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>xxxxxxxx</Text>
          </View>
        </View>
        <View style={styles.borderFullWithFlex}>
          <View
            style={{
              width: "25%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>4</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>SHM</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>xxxxxx</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>xxxxxx</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>xxxxxxx</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>xxxxxxx</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>xxxxxxxx</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>xxxxxxxx</Text>
          </View>
        </View>
        <View style={styles.borderFullWithFlex}>
          <View
            style={{
              width: "25%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>5</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>SHM</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>xxxxxx</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>xxxxxx</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>xxxxxxx</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>xxxxxxx</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>xxxxxxxx</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>xxxxxxxx</Text>
          </View>
        </View>
        <View style={styles.borderFullWithFlex}>
          <View
            style={{
              width: "74%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text style={styles.text}>Pengurangan Tata Kota</Text>
          </View>
          <View
            style={{
              width: "14.13%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>xxxxxxx</Text>
          </View>
          <View
            style={{
              width: "14.13%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text style={styles.text}>200,00</Text>
          </View>
        </View>
        <View style={styles.borderFullWithFlex}>
          <View
            style={{
              width: "74%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text style={styles.text}>TOTAL</Text>
          </View>
          <View
            style={{
              width: "14.13%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>xxxxxxx</Text>
          </View>
          <View
            style={{
              width: "14.13%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>200,00</Text>
          </View>
        </View>

        <View style={styles.borderFull}>
          <Text style={styles.text}>LEGALITAS BANGUNAN</Text>
        </View>

        <View style={styles.borderFullWithFlex}>
          <View style={[styles.trLeft, { width: "23.5%" }]}>
            <Text></Text>
            <Text></Text>
          </View>
          <View style={[styles.tr, { width: "33.5%", borderRightWidth: 1 }]}>
            <Text></Text>
          </View>
          <View style={[styles.trLeft, { width: "100" }]}>
            <Text style={styles.text}>TOTAL LUAS BANGUNAN</Text>
          </View>
        </View>
        <View style={styles.borderLeftRightWithFlex}>
          <View style={[styles.trLeft, { width: "23.5%" }]}>
            <Text>Type Bangunan</Text>
            <Text>:</Text>
          </View>
          <View style={[styles.tr, { width: "33.5%", borderRightWidth: 1 }]}>
            <Text>Rumah Tinggal</Text>
          </View>

          <View style={[styles.trLeft, { width: "12.75%" }]}>
            <Text>- Penyesuaian</Text>
            <Text>:</Text>
          </View>
          <View style={[styles.tr, { width: "12.75%" }]}>
            <Text> 500,00 m{"\u00B2"}</Text>
          </View>
          <View style={[styles.trLeft, { width: "8.75%" }]}>
            <Text>- Lantai</Text>
            <Text>:</Text>
          </View>
          <View style={[styles.tr, { width: "8.75%" }]}>
            <Text> x</Text>
          </View>
        </View>
        <View style={styles.borderLeftRightWithFlex}>
          <View style={[styles.trLeft, { width: "23.5%" }]}>
            <Text>No. IMB</Text>
            <Text>:</Text>
          </View>
          <View style={[styles.tr, { width: "33.5%", borderRightWidth: 1 }]}>
            <Text>xxxxxxx</Text>
          </View>
          <View style={[styles.trLeft, { width: "12.75%" }]}>
            <Text>- IMB</Text>
            <Text>:</Text>
          </View>
          <View style={[styles.tr, { width: "12.75%" }]}>
            <Text> 100,00 m{"\u00B2"}</Text>
          </View>
          <View style={[styles.trLeft, { width: "8.75%" }]}>
            <Text>- Lantai</Text>
            <Text>:</Text>
          </View>
          <View style={[styles.tr, { width: "8.75%" }]}>
            <Text> x</Text>
          </View>
        </View>
        <View style={styles.borderLeftRightWithFlex}>
          <View style={[styles.trLeft, { width: "23.5%" }]}>
            <Text>Tgl. Penerbitan IMB</Text>
            <Text>:</Text>
          </View>
          <View style={[styles.tr, { width: "33.5%", borderRightWidth: 1 }]}>
            <Text>xxxxxxx</Text>
          </View>
        </View>
        <View style={styles.borderLeftRightWithFlex}>
          <View style={[styles.trLeft, { width: "14.25%" }]}>
            <Text>Thn Bangun</Text>
            <Text>:</Text>
          </View>
          <View style={[styles.tr, { width: "14.25%" }]}>
            <Text>2010</Text>
          </View>
          <View style={[styles.trLeft, { width: "14.25%" }]}>
            <Text>Thn Renovasi</Text>
            <Text>:</Text>
          </View>
          <View style={[styles.tr, { width: "14.25%", borderRightWidth: 1 }]}>
            <Text>2015</Text>
          </View>
        </View>
      </View>
      {/* END : TABEL KETUJUH */}

      {/* START : TABEL KEDELAPAN */}
      <View style={{ borderBottomWidth: 1, marginBottom: 10 }}>
        <View style={styles.borderFull}>
          <Text style={[styles.text, { textAlign: "center" }]}>KONDISI</Text>
        </View>
        <View style={styles.borderFullWithFlex}>
          <View style={[styles.trLeft, { width: "23.5%" }]}>
            <Text>Kondisi tanah</Text>
            <Text>:</Text>
          </View>
          <View style={[styles.tr, { width: "33.5%", borderRightWidth: 1 }]}>
            <Text>Tanah Malang</Text>
          </View>
          <View style={[styles.trLeft, { width: "100" }]}>
            <Text style={styles.text}>BATAS BIDANG</Text>
          </View>
        </View>
        <View style={styles.borderLeftRightWithFlex}>
          <View style={[styles.trLeft, { width: "23.5%" }]}>
            <Text>Peruntukan</Text>
            <Text>:</Text>
          </View>
          <View style={[styles.tr, { width: "33.5%", borderRightWidth: 1 }]}>
            <Text>Pemukiman / Rumah Tiggal / Hunian</Text>
          </View>
          <View style={[styles.trLeft, { width: "12.75%" }]}>
            <Text>- Depan</Text>
            <Text>:</Text>
          </View>
          <View style={[styles.tr, { width: "12.75%" }]}>
            <Text> xxxxxx</Text>
          </View>
        </View>
        <View style={styles.borderLeftRightWithFlex}>
          <View style={[styles.trLeft, { width: "23.5%" }]}>
            <Text>Bentuk Lahan</Text>
            <Text>:</Text>
          </View>
          <View style={[styles.tr, { width: "33.5%", borderRightWidth: 1 }]}>
            <Text>Menyerupai Persegi Panjang</Text>
          </View>
          <View style={[styles.trLeft, { width: "12.75%" }]}>
            <Text>- Belakang</Text>
            <Text>:</Text>
          </View>
          <View style={[styles.tr, { width: "12.75" }]}>
            <Text>xxxxxxx</Text>
          </View>
        </View>
        <View style={styles.borderLeftRightWithFlex}>
          <View style={[styles.trLeft, { width: "15.40%" }]}>
            <Text>Kontur Lahan</Text>
            <Text>:</Text>
          </View>
          <View style={[styles.tr, { width: "10.25%" }]}>
            <Text>Datar</Text>
          </View>
          <View style={[styles.trLeft, { width: "17.10%" }]}>
            <Text>Lebar Depan Bidang</Text>
            <Text>:</Text>
          </View>
          <View style={[styles.tr, { width: "14.25%", borderRightWidth: 1 }]}>
            <Text>12,00m</Text>
          </View>
          <View style={[styles.trLeft, { width: "12.75%" }]}>
            <Text>- Kanan</Text>
            <Text>:</Text>
          </View>
          <View style={[styles.tr, { width: "12.75%" }]}>
            <Text> xxxxxx</Text>
          </View>
        </View>
        <View style={styles.borderLeftRightWithFlex}>
          <View style={[styles.trLeft, { width: "15.40%" }]}>
            <Text>Letak Bidang</Text>
            <Text>:</Text>
          </View>
          <View style={[styles.tr, { width: "10.25%" }]}>
            <Text>Depan</Text>
          </View>
          <View style={[styles.trLeft, { width: "17.10%" }]}>
            <Text>Panjang Bidang</Text>
            <Text>:</Text>
          </View>
          <View style={[styles.tr, { width: "14.25%", borderRightWidth: 1 }]}>
            <Text>15,00m</Text>
          </View>
          <View style={[styles.trLeft, { width: "12.75%" }]}>
            <Text>- Kiri</Text>
            <Text>:</Text>
          </View>
          <View style={[styles.tr, { width: "12.75%" }]}>
            <Text> xxxxxx</Text>
          </View>
        </View>
        <View style={styles.borderLeftRightWithFlex}>
          <View style={[styles.trLeft, { width: "15.37%" }]}>
            <Text>Ketinggian dari Jalan</Text>
            <Text>:</Text>
          </View>
          <View style={[styles.tr, { width: "10.37%" }]}>
            <Text>0,50m</Text>
          </View>
          <View
            style={[styles.trLeft, { width: "31.25%", borderRightWidth: 1 }]}
          >
            <Text>diatas permukaan jalan</Text>
          </View>
        </View>
      </View>
      {/* END : TABEL KEDELAPAN */}

      {/* START : TABEL KESEMBILAN */}
      <View style={{ borderBottomWidth: 1, marginBottom: 10 }} break>
        <View style={[styles.borderFull, { borderBottomWidth: 1 }]}>
          <Text style={[styles.text, { textAlign: "center" }]}>LINGKUNGAN</Text>
        </View>
        <View style={[styles.borderLeftRightWithFlex, { height: 20 }]}>
          <View style={styles.trLeft}>
            <Text>Aset yang tidak memiliki akses jalan umum</Text>
            <Text>:</Text>
          </View>
          <View style={[styles.tr, { width: "30%", marginLeft: 10 }]}>
            <Text>Tidak</Text>
          </View>
        </View>
        <View style={[styles.borderLeftRightWithFlex, { height: 20 }]}>
          <View style={styles.trLeft}>
            <Text>
              Aset berada dalam radius ≤ 100 m dari rumah ibadah atau sekolah
              umum(yang ramai dan rawan macet)
            </Text>
            <Text>:</Text>
          </View>
          <View style={[styles.tr, { width: "30%", marginLeft: 10 }]}>
            <Text>Tidak</Text>
          </View>
        </View>
        <View style={[styles.borderLeftRightWithFlex, { height: 20 }]}>
          <View style={styles.trLeft}>
            <Text>
              Aset berada dalam radius kurang dari 100 meter dari lampu merah
              atau tidak memiliki lahan parkir
            </Text>
            <Text>:</Text>
          </View>
          <View style={[styles.tr, { width: "30%", marginLeft: 10 }]}>
            <Text>Tidak</Text>
          </View>
        </View>
        <View style={[styles.borderLeftRightWithFlex, { height: 20 }]}>
          <View style={styles.trLeft}>
            <Text>Aset Berada Pada Lingkungan Kumuh</Text>
            <Text>:</Text>
          </View>
          <View style={[styles.tr, { width: "30%", marginLeft: 10 }]}>
            <Text>Tidak</Text>
          </View>
        </View>
        <View style={[styles.borderLeftRightWithFlex, { height: 20 }]}>
          <View style={styles.trLeft}>
            <Text>
              Aset memiliki akses jalan {`<=`} 3 m dan / atau jalan buntu
            </Text>
            <Text>:</Text>
          </View>
          <View style={[styles.tr, { width: "30%", marginLeft: 10 }]}>
            <Text>Tidak</Text>
          </View>
        </View>
        <View style={[styles.borderLeftRightWithFlex, { height: 20 }]}>
          <View style={styles.trLeft}>
            <Text>Aset Berada Pada Lingkungan Kumuh</Text>
            <Text>:</Text>
          </View>
          <View style={[styles.tr, { width: "30%", marginLeft: 10 }]}>
            <Text>Tidak</Text>
          </View>
        </View>
        <View style={[styles.borderLeftRightWithFlex, { height: 20 }]}>
          <View style={styles.trLeft}>
            <Text>Aset memiliki akses jalan ≤ 3 m dan / atau jalan buntu</Text>
            <Text>:</Text>
          </View>
          <View style={[styles.tr, { width: "30%", marginLeft: 10 }]}>
            <Text>Tidak</Text>
          </View>
        </View>
        <View style={[styles.borderLeftRightWithFlex, { height: 20 }]}>
          <View style={styles.trLeft}>
            <Text>Aset berada dibawah permukaan jalan umum {`>=`} 50 cm</Text>
            <Text>:</Text>
          </View>
          <View style={[styles.tr, { width: "30%", marginLeft: 10 }]}>
            <Text>Tidak</Text>
          </View>
        </View>
        <View style={[styles.borderLeftRightWithFlex, { height: 20 }]}>
          <View style={styles.trLeft}>
            <Text>
              Aset berada dekat dengan rel kereta api, rel LRT, rel MRT berjarak
              {`<=`} 25m
            </Text>
            <Text>:</Text>
          </View>
          <View style={[styles.tr, { width: "30%", marginLeft: 10 }]}>
            <Text>Tidak</Text>
          </View>
        </View>
        <View style={[styles.borderLeftRightWithFlex, { height: 20 }]}>
          <View style={styles.trLeft}>
            <Text style={{ width: "95%" }}>
              Aset tidak sesuai dengan rencana tata kota atau berada di zona
              jalur hijau, fasilitas umum, hutan lindung dan perkantoran
              pemerintah
            </Text>
            <Text>:</Text>
          </View>
          <View style={[styles.tr, { width: "30%", marginLeft: 10 }]}>
            <Text>Tidak</Text>
          </View>
        </View>
        <View style={[styles.borderLeftRightWithFlex, { height: 20 }]}>
          <View style={styles.trLeft}>
            <Text>
              Aset berada di daerah rawan longsor, pesisir pantai, konservasi
              dan pertambangan berjarak ≤ 100 m
            </Text>
            <Text>:</Text>
          </View>
          <View style={[styles.tr, { width: "30%", marginLeft: 10 }]}>
            <Text>Tidak</Text>
          </View>
        </View>
        <View style={[styles.borderLeftRightWithFlex, { height: 20 }]}>
          <View style={styles.trLeft}>
            <Text>Aset berada dekat dengan rawa / di hutan radius 100 m</Text>
            <Text>:</Text>
          </View>
          <View style={[styles.tr, { width: "30%", marginLeft: 10 }]}>
            <Text>Tidak</Text>
          </View>
        </View>
        <View style={[styles.borderLeftRightWithFlex, { height: 20 }]}>
          <View style={styles.trLeft}>
            <Text>
              Aset berupa tanah dan / atau bangunan yang berdiri dalam radius 30
              meter dari jalur distribusi pipa gas bumi / gas alam
            </Text>
            <Text>:</Text>
          </View>
          <View style={[styles.tr, { width: "30%", marginLeft: 10 }]}>
            <Text>Tidak</Text>
          </View>
        </View>
        <View style={[styles.borderLeftRightWithFlex, { height: 20 }]}>
          <View style={styles.trLeft}>
            <Text>
              Aset berdekatan dengan menara / tower BTS yang tertanam dengan
              jarak {`<=`} 20m
            </Text>
            <Text>:</Text>
          </View>
          <View style={[styles.tr, { width: "30%", marginLeft: 10 }]}>
            <Text>Tidak</Text>
          </View>
        </View>
        <View style={[styles.borderLeftRightWithFlex, { height: 20 }]}>
          <View style={styles.trLeft}>
            <Text>Aset bermasalah secara hukum / dalam sengketa</Text>
            <Text>:</Text>
          </View>
          <View style={[styles.tr, { width: "30%", marginLeft: 10 }]}>
            <Text>Tidak</Text>
          </View>
        </View>
        <View style={[styles.borderLeftRightWithFlex, { height: 20 }]}>
          <View style={styles.trLeft}>
            <Text>Aset berada di daerah rawan banjir</Text>
            <Text>:</Text>
          </View>
          <View style={[styles.tr, { width: "30%", marginLeft: 10 }]}>
            <Text>Tidak</Text>
          </View>
        </View>
        <View style={[styles.borderLeftRightWithFlex, { height: 20 }]}>
          <View style={styles.trLeft}>
            <Text style={{ width: "95%" }}>
              Aset berada {`<=`} 30m dari kabel terluar SUTET / SUTT / SUTTAS
            </Text>
            <Text>:</Text>
          </View>
          <View style={[styles.tr, { width: "30%", marginLeft: 10 }]}>
            <Text>Tidak</Text>
          </View>
        </View>
        <View style={[styles.borderLeftRightWithFlex, { height: 20 }]}>
          <View style={styles.trLeft}>
            <Text style={{ width: "95%" }}>
              Aset berada dalam radius {`<=`} 100m dari pemakaman keluarga /
              umum (TPU)
            </Text>
            <Text>:</Text>
          </View>
          <View style={[styles.tr, { width: "30%", marginLeft: 10 }]}>
            <Text>Tidak</Text>
          </View>
        </View>
        <View style={[styles.borderLeftRightWithFlex, { height: 20 }]}>
          <View style={styles.trLeft}>
            <Text style={{ width: "95%" }}>
              Aset berada dekat sungai (Tepi sungai berturap beton {`<=`} 10m,
              Tepi sungai tidak berturap beton {`<=`} 30m)
            </Text>
            <Text>:</Text>
          </View>
          <View style={[styles.tr, { width: "30%", marginLeft: 10 }]}>
            <Text>Tidak</Text>
          </View>
        </View>
        <View style={[styles.borderLeftRightWithFlex, { height: 20 }]}>
          <View style={styles.trLeft}>
            <Text style={{ width: "95%" }}>
              Aset berada pada posisi tusuk sate
            </Text>
            <Text>:</Text>
          </View>
          <View style={[styles.tr, { width: "30%", marginLeft: 10 }]}>
            <Text>Tidak</Text>
          </View>
        </View>
        <View style={[styles.borderLeftRightWithFlex, { height: 20 }]}>
          <View style={styles.trLeft}>
            <Text style={{ width: "95%" }}>
              Aset berdekatan dengan SPBU radius ± 50 m
            </Text>
            <Text>:</Text>
          </View>
          <View style={[styles.tr, { width: "30%", marginLeft: 10 }]}>
            <Text>Tidak</Text>
          </View>
        </View>
        <View style={[styles.borderLeftRightWithFlex, { height: 20 }]}>
          <View style={styles.trLeft}>
            <Text style={{ width: "95%" }}>
              Aset yang dipergunakan untuk : Rumah sakit, klinik pengobatan,
              Rumah Ibadah, Kantor / markas Partai Politik, Organisasi Masa,
              Organisasi Keagamaan, Sekolah Umum
            </Text>
            <Text>:</Text>
          </View>
          <View style={[styles.tr, { width: "30%", marginLeft: 10 }]}>
            <Text>Tidak</Text>
          </View>
        </View>
        <View style={[styles.borderLeftRightWithFlex, { height: 20 }]}>
          <View style={styles.trLeft}>
            <Text style={{ width: "95%" }}>
              Aset yang dipergunakan untuk : Rumah sakit, klinik pengobatan,
              Rumah Ibadah, Kantor / markas Partai Politik, Organisasi Masa,
              Organisasi Keagamaan, Sekolah Umum
            </Text>
            <Text>:</Text>
          </View>
          <View style={[styles.tr, { width: "30%", marginLeft: 10 }]}>
            <Text>Tidak</Text>
          </View>
        </View>
        <View style={[styles.borderLeftRightWithFlex, { height: 20 }]}>
          <View style={styles.trLeft}>
            <Text style={{ width: "95%" }}>
              Aset berupa rumah panggung / dinding kayu / bilik
            </Text>
            <Text>:</Text>
          </View>
          <View style={[styles.tr, { width: "30%", marginLeft: 10 }]}>
            <Text>Tidak</Text>
          </View>
        </View>
        <View style={[styles.borderLeftRightWithFlex, { height: 20 }]}>
          <View style={styles.trLeft}>
            <Text style={{ width: "95%" }}>
              Aset berada dekat dengan Tempat Pembuangan Sampah Sementara (TPS)
              berjarak {`>=`} 100m dan Tempat Pembuangan Akhir (TPA) berjarak{" "}
              {`<=`} 500m
            </Text>
            <Text>:</Text>
          </View>
          <View style={[styles.tr, { width: "30%", marginLeft: 10 }]}>
            <Text>Tidak</Text>
          </View>
        </View>
        <View style={[styles.borderLeftRightWithFlex, { height: 20 }]}>
          <View style={styles.trLeft}>
            <Text>Akses jalan masih berupa tanah atau batu</Text>
            <Text>:</Text>
          </View>
          <View style={[styles.tr, { width: "30%", marginLeft: 10 }]}>
            <Text>Tidak</Text>
          </View>
        </View>
        <View style={[styles.borderLeftRightWithFlex, { height: 20 }]}>
          <View style={styles.trLeft}>
            <Text style={{ width: "95%" }}>
              Daerah Tidak Tenang / rawan gangguan
            </Text>
            <Text>:</Text>
          </View>
          <View style={[styles.tr, { width: "30%", marginLeft: 10 }]}>
            <Text>Tidak</Text>
          </View>
        </View>
        <View style={[styles.borderLeftRightWithFlex, { height: 20 }]}>
          <View style={styles.trLeft}>
            <Text>Daerah Merah / Lokalisasi</Text>
            <Text>:</Text>
          </View>
          <View style={[styles.tr, { width: "30%", marginLeft: 10 }]}>
            <Text>Tidak</Text>
          </View>
        </View>
      </View>
      {/* END : TABEL KESEMBILAN */}

      {/* START : TABEL KESEPULUH */}
      <View style={{ borderBottomWidth: 1, marginBottom: 10 }} break>
        <View style={styles.borderFull}>
          <Text style={[styles.text, { textAlign: "center" }]}>
            INFRASTRUKTUR & FASILITAS
          </Text>
        </View>
        <View style={styles.borderFullWithFlex}>
          <View style={[styles.trLeft, { width: "40%" }]}>
            <Text>Jalan Masuk Menuju Objeck</Text>
            <Text>:</Text>
          </View>
          <View style={[styles.tr, { width: "20%" }]}>
            <Text>Ada</Text>
          </View>
          <View style={[styles.trLeft, { width: "20%" }]}>
            <Text>- Milik</Text>
            <Text>:</Text>
          </View>
          <View style={styles.tr}>
            <Text>Fasilitas Umum</Text>
          </View>
        </View>
        <View style={styles.borderLeftRightWithFlex}>
          <View style={[styles.trLeft, { width: "40%" }]}>
            <Text>Lebar Jalan Depan Objek</Text>
            <Text>:</Text>
          </View>
          <View style={[styles.tr, { width: "20%" }]}>
            <Text>7,00 Meter</Text>
          </View>
          <View style={[styles.trLeft, { width: "20%" }]}>
            <Text>Kondisi</Text>
            <Text>:</Text>
          </View>
          <View style={styles.tr}>
            <Text>Baik</Text>
          </View>
        </View>
        <View style={styles.borderLeftRightWithFlex}>
          <View style={[styles.trLeft, { width: "40%" }]}>
            <Text>Lebar Jalan Menuju Objek</Text>
            <Text>:</Text>
          </View>
          <View style={[styles.tr, { width: "20%" }]}>
            <Text>20,00 Meter</Text>
          </View>
          <View style={[styles.trLeft, { width: "20%" }]}>
            <Text>Kondisi</Text>
            <Text>:</Text>
          </View>
          <View style={styles.tr}>
            <Text>Baik</Text>
          </View>
        </View>
        <View style={styles.borderLeftRightWithFlex}>
          <View style={[styles.trLeft, { width: "22.20%" }]}>
            <Text>Lampu Jalan</Text>
            <Text>:</Text>
          </View>
          <View style={[styles.tr, { width: "20%" }]}>
            <Text>Ada</Text>
          </View>
        </View>
        <View style={styles.borderLeftRightWithFlex}>
          <View style={[styles.trLeft, { width: "22.20%" }]}>
            <Text>Jalan Utama (Main Road)</Text>
            <Text>:</Text>
          </View>
          <View style={[styles.tr, { width: "13%" }]}>
            <Text>xxxxxxx</Text>
          </View>
          <View style={[styles.trLeft, { width: "22.20%" }]}>
            <Text>Jalan Penghubung</Text>
            <Text>:</Text>
          </View>
          <View style={[styles.tr, { width: "20%" }]}>
            <Text>xxxxxxx</Text>
          </View>
        </View>
        <View style={styles.borderLeftRightWithFlex}>
          <View style={[styles.trLeft, { width: "22.20%" }]}>
            <Text>Jalan Nadi</Text>
            <Text>:</Text>
          </View>
          <View style={[styles.tr, { width: "13%" }]}>
            <Text>xxxxxxx</Text>
          </View>
          <View style={[styles.trLeft, { width: "22.20%" }]}>
            <Text>Jalan Setempat</Text>
            <Text>:</Text>
          </View>
          <View style={[styles.tr, { width: "20%" }]}>
            <Text>xxxxxxx</Text>
          </View>
        </View>
        <View style={styles.borderLeftRightWithFlex}>
          <View style={[styles.trLeft, { width: "22.20%" }]}>
            <Text>Material Jalan</Text>
            <Text>:</Text>
          </View>
          <View style={[styles.tr, { width: "20%" }]}>
            <Text>ASPAL</Text>
          </View>
        </View>
        <View style={styles.borderFullWithFlex}>
          <View style={[styles.trLeft, { width: "22.20%" }]}>
            <Text>Listrik</Text>
            <Text>:</Text>
          </View>
          <View style={[styles.tr, { width: "13%" }]}>
            <Text>Ada</Text>
          </View>
          <View style={[styles.trLeft, { width: "22.20%" }]}>
            <Text>Remarks PLN</Text>
            <Text>:</Text>
          </View>
          <View style={[styles.tr, { width: "20%" }]}>
            <Text>900 Watt</Text>
          </View>
        </View>
        <View style={styles.borderLeftRightWithFlex}>
          <View style={[styles.trLeft, { width: "22.20%" }]}>
            <Text>Air Bersih</Text>
            <Text>:</Text>
          </View>
          <View style={[styles.tr, { width: "13%" }]}>
            <Text>Ada</Text>
          </View>
          <View style={[styles.trLeft, { width: "22.20%" }]}>
            <Text>Remarks PAM</Text>
            <Text>:</Text>
          </View>
          <View style={[styles.tr, { width: "20%" }]}>
            <Text></Text>
          </View>
        </View>
        <View style={styles.borderLeftRightWithFlex}>
          <View style={[styles.trLeft, { width: "22.20%" }]}>
            <Text>Telephone</Text>
            <Text>:</Text>
          </View>
          <View style={[styles.tr, { width: "13%" }]}>
            <Text>Ada</Text>
          </View>
          <View style={[styles.trLeft, { width: "22.20%" }]}>
            <Text>Remarks</Text>
            <Text>:</Text>
          </View>
          <View style={[styles.tr, { width: "20%" }]}>
            <Text>2 Line</Text>
          </View>
        </View>
        <View style={styles.borderLeftRightWithFlex}>
          <View style={[styles.trLeft, { width: "22.20%" }]}>
            <Text>Jaringan Gas</Text>
            <Text>:</Text>
          </View>
          <View style={[styles.tr, { width: "13%" }]}>
            <Text>Ada</Text>
          </View>
        </View>
        <View style={styles.borderLeftRightWithFlex}>
          <View style={[styles.trLeft, { width: "22.20%" }]}>
            <Text>Lampu Jalan</Text>
            <Text>:</Text>
          </View>
          <View style={[styles.tr, { width: "13%" }]}>
            <Text>Ada</Text>
          </View>
          <View style={[styles.trLeft, { width: "22.20%" }]}>
            <Text>Tempat Hiburan</Text>
            <Text>:</Text>
          </View>
          <View style={[styles.tr, { width: "20%" }]}>
            <Text>Ada</Text>
          </View>
        </View>
        <View style={styles.borderLeftRightWithFlex}>
          <View style={[styles.trLeft, { width: "22.20%" }]}>
            <Text>Angkutan Umum</Text>
            <Text>:</Text>
          </View>
          <View style={[styles.tr, { width: "13%" }]}>
            <Text>Ada</Text>
          </View>
          <View style={[styles.trLeft, { width: "22.20%" }]}>
            <Text>Perkantoran</Text>
            <Text>:</Text>
          </View>
          <View style={[styles.tr, { width: "20%" }]}>
            <Text>Ada</Text>
          </View>
        </View>
        <View style={styles.borderLeftRightWithFlex}>
          <View style={[styles.trLeft, { width: "22.20%" }]}>
            <Text>Pasar</Text>
            <Text>:</Text>
          </View>
          <View style={[styles.tr, { width: "13%" }]}>
            <Text>Ada</Text>
          </View>
          <View style={[styles.trLeft, { width: "22.20%" }]}>
            <Text>Pertokkoan</Text>
            <Text>:</Text>
          </View>
          <View style={[styles.tr, { width: "20%" }]}>
            <Text>Ada</Text>
          </View>
        </View>
        <View style={styles.borderLeftRightWithFlex}>
          <View style={[styles.trLeft, { width: "22.20%" }]}>
            <Text>Sekolah</Text>
            <Text>:</Text>
          </View>
          <View style={[styles.tr, { width: "13%" }]}>
            <Text>Ada</Text>
          </View>
          <View style={[styles.trLeft, { width: "22.20%" }]}>
            <Text>Sarana Olahraga</Text>
            <Text>:</Text>
          </View>
          <View style={[styles.tr, { width: "20%" }]}>
            <Text>Ada</Text>
          </View>
        </View>
        <View style={styles.borderLeftRightWithFlex}>
          <View style={[styles.trLeft, { width: "22.20%" }]}>
            <Text>Rumah Sakit / Puskesmas</Text>
            <Text>:</Text>
          </View>
          <View style={[styles.tr, { width: "13%" }]}>
            <Text>Ada</Text>
          </View>
          <View style={[styles.trLeft, { width: "22.20%" }]}>
            <Text>Tempat Ibadah</Text>
            <Text>:</Text>
          </View>
          <View style={[styles.tr, { width: "20%" }]}>
            <Text>Ada</Text>
          </View>
        </View>
        <View style={styles.borderFull}>
          <Text style={{ textAlign: "center" }}>Rumah 1</Text>
        </View>
        <View style={styles.borderFullWithFlex}>
          <View
            style={{
              width: "25%",
              fontSize: 8,
              borderColor: "#000000",
              textAlign: "center",
              borderRightWidth: 1,
            }}
          >
            <Text>No.</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
              height: 20,
            }}
          >
            <Text>Jumlah Ruangan</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
              height: 20,
            }}
          >
            <Text>Garasi / Car Port</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
              height: 20,
            }}
          >
            <Text>Ruang Tamu</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
              height: 20,
            }}
          >
            <Text>Ruang Kantor</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
              height: 20,
            }}
          >
            <Text>Kamar Tidur</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
              height: 20,
            }}
          >
            <Text>Kamar Pembantu</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
              height: 20,
            }}
          >
            <Text>Kamar Mandi</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
              height: 20,
            }}
          >
            <Text>Dapur</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
              height: 20,
            }}
          >
            <Text>Gudang</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
              height: 20,
            }}
          >
            <Text>Lainnya</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              height: 20,
            }}
          >
            <Text>Luas per Lantai (m{"\u00B2"} )</Text>
          </View>
        </View>
        <View style={styles.borderFullWithFlex}>
          <View
            style={{
              width: "25%",
              fontSize: 8,
              borderColor: "#000000",
              textAlign: "center",
              borderRightWidth: 1,
            }}
          >
            <Text>1</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>Lantai 1</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>1</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>1</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>1</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>1</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>1</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>1</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>1</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>1</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>1</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
            }}
          >
            <Text>100,100</Text>
          </View>
        </View>
        <View style={styles.borderFullWithFlex}>
          <View
            style={{
              width: "25%",
              fontSize: 8,
              borderColor: "#000000",
              textAlign: "center",
              borderRightWidth: 1,
            }}
          >
            <Text>2</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>Lantai 2</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>1</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>1</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>1</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>1</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>1</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>1</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>1</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>1</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>1</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
            }}
          >
            <Text>100,100</Text>
          </View>
        </View>
        <View style={styles.borderFullWithFlex}>
          <View
            style={{
              width: "25%",
              fontSize: 8,
              borderColor: "#000000",
              textAlign: "center",
              borderRightWidth: 1,
            }}
          >
            <Text>1</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>Lantai 3</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>1</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>1</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>1</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>1</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>1</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>1</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>1</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>1</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>1</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
            }}
          >
            <Text>100,100</Text>
          </View>
        </View>
        <View style={styles.borderFullWithFlex}>
          <View
            style={{
              width: "25%",
              fontSize: 8,
              borderColor: "#000000",
              textAlign: "center",
              borderRightWidth: 1,
            }}
          >
            <Text>1</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>Lantai 4</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>1</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>1</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>1</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>1</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>1</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>1</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>1</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>1</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>1</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
            }}
          >
            <Text>100,100</Text>
          </View>
        </View>
        <View style={styles.borderFullWithFlex}>
          <View
            style={{
              width: "25%",
              fontSize: 8,
              borderColor: "#000000",
              textAlign: "center",
              borderRightWidth: 1,
            }}
          >
            <Text>1</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>Lantai 5</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>1</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>1</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>1</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>1</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>1</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>1</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>1</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>1</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>1</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
            }}
          >
            <Text>100,100</Text>
          </View>
        </View>
        <View style={styles.borderFullWithFlex}>
          <View
            style={{
              width: "91%",
              fontSize: 8,
              borderColor: "#000000",
              textAlign: "center",
              borderRightWidth: 1,
            }}
          >
            <Text>
              Penyesuaian Peraturan (GSB & Ketinggian Lantai Bangunan)
            </Text>
          </View>
          <View
            style={{
              width: "9%",
              fontSize: 8,
              borderColor: "#000000",
              textAlign: "center",
            }}
          >
            <Text></Text>
          </View>
        </View>
        <View style={styles.borderFullWithFlex}>
          <View
            style={{
              width: "91%",
              fontSize: 8,
              borderColor: "#000000",
              textAlign: "center",
              borderRightWidth: 1,
            }}
          >
            <Text style={styles.text}>TOTAL LUAS BANGUNAN (m{"\u00B2"})</Text>
          </View>
          <View
            style={{
              width: "9%",
              fontSize: 8,
              borderColor: "#000000",
              textAlign: "center",
            }}
          >
            <Text style={styles.text}>100</Text>
          </View>
        </View>
        <View style={[styles.borderFull, { borderBottomWidth: 1 }]}>
          <Text style={styles.text}>SPESIFIKASI BANGUNAN</Text>
        </View>
        <View style={styles.borderLeftRightWithFlex}>
          <View style={[styles.trLeft, { width: "22.20%" }]}>
            <Text>Pondasi</Text>
            <Text>:</Text>
          </View>
          <View style={styles.tr}>
            <Text>Pondasi Dangkal Dengan Batu Kali Menerus</Text>
          </View>
        </View>
        <View style={styles.borderLeftRightWithFlex}>
          <View style={[styles.trLeft, { width: "22.20%" }]}>
            <Text>Struktur</Text>
            <Text>:</Text>
          </View>
          <View style={styles.tr}>
            <Text>Struktur Beton Bertulang</Text>
          </View>
        </View>
        <View style={styles.borderLeftRightWithFlex}>
          <View style={[styles.trLeft, { width: "22.20%" }]}>
            <Text>Rangka Atap</Text>
            <Text>:</Text>
          </View>
          <View style={styles.tr}>
            <Text>Rangka Baja Ringan Kelas II</Text>
          </View>
        </View>
        <View style={styles.borderLeftRightWithFlex}>
          <View style={[styles.trLeft, { width: "22.20%" }]}>
            <Text>Penutup Atap</Text>
            <Text>:</Text>
          </View>
          <View style={styles.tr}>
            <Text>Genteng Kodok</Text>
          </View>
        </View>
        <View style={styles.borderLeftRightWithFlex}>
          <View style={[styles.trLeft, { width: "22.20%" }]}>
            <Text>Plafon</Text>
            <Text>:</Text>
          </View>
          <View style={styles.tr}>
            <Text>Gypsumboard Rangka Alumunium</Text>
          </View>
        </View>
        <View style={styles.borderLeftRightWithFlex}>
          <View style={[styles.trLeft, { width: "22.20%" }]}>
            <Text>Dinding</Text>
            <Text>:</Text>
          </View>
          <View style={styles.tr}>
            <Text>Batu Bata Dilapis Cat</Text>
          </View>
        </View>
        <View style={styles.borderLeftRightWithFlex}>
          <View style={[styles.trLeft, { width: "22.20%" }]}>
            <Text>Pintu</Text>
            <Text>:</Text>
          </View>
          <View style={styles.tr}>
            <Text>Kusen Kayu Kelas I</Text>
          </View>
        </View>
        <View style={styles.borderLeftRightWithFlex}>
          <View style={[styles.trLeft, { width: "22.20%" }]}>
            <Text>Jendela</Text>
            <Text>:</Text>
          </View>
          <View style={styles.tr}>
            <Text>Kusen Kayu Kelas II</Text>
          </View>
        </View>
        <View style={styles.borderLeftRightWithFlex}>
          <View style={[styles.trLeft, { width: "22.20%" }]}>
            <Text>Lantai</Text>
            <Text>:</Text>
          </View>
          <View style={styles.tr}>
            <Text>Keramik Lokal</Text>
          </View>
        </View>
        <View style={styles.borderLeftRightWithFlex}>
          <View style={[styles.trLeft, { width: "22.20%" }]}>
            <Text>Utilitas</Text>
            <Text>:</Text>
          </View>
          <View style={styles.tr}>
            <Text>Peralatan sanitair, catu daya, ME dan plumbing</Text>
          </View>
        </View>
        <View style={styles.borderLeftRightWithFlex}>
          <View style={[styles.trLeft, { width: "22.20%" }]}>
            <Text>KONDISI BANGUNAN</Text>
            <Text>:</Text>
          </View>
          <View style={styles.tr}>
            <Text>Baik / Good</Text>
          </View>
        </View>
      </View>
      {/* END : TABEL KESEPULUH */}
      <View break>
        <View style={[styles.borderFullWithFlex, { borderBottomWidth: 1 }]}>
          <View style={[styles.trLeft, { width: "50%" }]}>
            <Text style={styles.text}>PROGRES PENYELSAIAN BANGUNAN</Text>
            <Text>:</Text>
          </View>
          <View style={styles.tr}>
            <Text> 100%</Text>
          </View>
        </View>
        <View style={styles.borderLeftRightWithFlex}>
          <View style={[styles.trLeft, { width: "22.20%" }]}>
            <Text>SARANA PELENGKAP</Text>
          </View>
        </View>
        <View style={styles.borderLeftRightWithFlex}>
          <View style={[styles.trLeft, { width: "22.20%" }]}>
            <Text>Pagar</Text>
            <Text>:</Text>
          </View>
          <View style={styles.tr}>
            <Text>Keliling</Text>
          </View>
        </View>
        <View style={styles.borderLeftRightWithFlex}>
          <View style={[styles.trLeft, { width: "22.20%" }]}>
            <Text>Carpot</Text>
            <Text>:</Text>
          </View>
          <View style={styles.tr}>
            <Text>Ada</Text>
          </View>
        </View>
        <View style={styles.borderLeftRightWithFlex}>
          <View style={[styles.trLeft, { width: "22.20%" }]}>
            <Text>Taman</Text>
            <Text>:</Text>
          </View>
          <View style={styles.tr}>
            <Text>Ada</Text>
          </View>
        </View>
        <View style={styles.borderLeftRightWithFlex}>
          <View style={[styles.trLeft, { width: "22.20%" }]}>
            <Text>Lainnya</Text>
            <Text>:</Text>
          </View>
          <View style={styles.tr}>
            <Text>-</Text>
          </View>
        </View>
      </View>
      {/* START : TABEL KESEBELAS */}
      <View style={{ marginBottom: 10, borderBottomWidth: 1 }}>
        <View style={[styles.borderFull, { borderBottomWidth: 1 }]}>
          <View style={{ textAlign: "center" }}>
            <Text>KETERANGAN TAMBAHAN</Text>
          </View>
        </View>
        <View style={[styles.borderLeftRightWithFlex, { height: 100 }]}>
          <View style={[styles.trLeft, { width: "22.20%" }]}>
            <Text>CATATAN PENILAIAN :</Text>
          </View>
        </View>
        <View style={[styles.borderLeftRightWithFlex, { height: 50 }]}>
          <View style={styles.trLeft}>
            <Text>Faktor yang Dapat Mengurangi Nilai</Text>
          </View>
        </View>
        <View style={[styles.borderLeftRightWithFlex, { height: 50 }]}>
          <View style={styles.trLeft}>
            <Text>Faktor Yang Dapat Menambah Nilai</Text>
          </View>
        </View>
      </View>
      {/* END : TABEL KESEBELAS */}

      {/* START : TABEL KEDUABELAS */}
      <View style={{ borderBottomWidth: 1, marginBottom: 10 }}>
        <View style={styles.borderFull}>
          <Text>PEMBANDING DATA PASAR</Text>
        </View>
        <View style={styles.borderFullWithFlex}>
          <View
            style={{
              width: "13%",
              fontSize: 8,
              borderColor: "#000000",
              textAlign: "center",
              borderRightWidth: 1,
            }}
          >
            <Text>NO.</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>URAIAN</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>OBJEK PENILAIAN</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>DATA 1</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>DATA 2</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
            }}
          >
            <Text>DATA 3</Text>
          </View>
        </View>
        <View style={[styles.borderFullWithFlex, { height: 20 }]}>
          <View
            style={{
              width: "13%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>1</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>Jenis Properti</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>Rumah Tinggal</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>Rumah Tinggal</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>Rumah Tinggal</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
            }}
          >
            <Text>Rumah Tinggal</Text>
          </View>
        </View>
        <View style={[styles.borderFullWithFlex, { height: 20 }]}>
          <View
            style={{
              width: "13%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>2</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>Alamat</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>xxxxxx</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>xxxxxx</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>xxxxxx</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
            }}
          >
            <Text>xxxxxx</Text>
          </View>
        </View>
        <View style={[styles.borderFullWithFlex, { height: 20 }]}>
          <View
            style={{
              width: "13%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>3</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>Jarak dengan Aktivasi</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text></Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>xxxxxx</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>xxxxxx</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
            }}
          >
            <Text>xxxxxx</Text>
          </View>
        </View>
        <View style={[styles.borderFullWithFlex, { height: 20 }]}>
          <View
            style={{
              width: "13%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>4</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>Sumber Data</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text></Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>xxxxxx</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>xxxxxx</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
            }}
          >
            <Text>xxxxxx</Text>
          </View>
        </View>
        <View style={[styles.borderFullWithFlex, { height: 20 }]}>
          <View
            style={{
              width: "13%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>5</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>Telepon</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text></Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>xxxxxx</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>xxxxxx</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
            }}
          >
            <Text>xxxxxx</Text>
          </View>
        </View>
        <View style={[styles.borderFullWithFlex, { height: 20 }]}>
          <View
            style={{
              width: "13%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>6</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>Keterangan</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text></Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>Broker / Perantara</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>Broker / Perantara</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
            }}
          >
            <Text>Broker / Perantara</Text>
          </View>
        </View>
        <View style={[styles.borderFullWithFlex, { height: 20 }]}>
          <View
            style={{
              width: "13%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>7</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>Data Harga (Rp)</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text></Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "right",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>2.000.000.000</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "right",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>2.000.000.000</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "right",
              borderColor: "#000000",
            }}
          >
            <Text>2.000.000.000</Text>
          </View>
        </View>
        <View style={[styles.borderFullWithFlex, { height: 20 }]}>
          <View
            style={{
              width: "13%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>8</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>Penawaran / Transaksi</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text></Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>Penawaran</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>Penawaran</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
            }}
          >
            <Text>Penawaran</Text>
          </View>
        </View>
        <View style={[styles.borderFullWithFlex, { height: 20 }]}>
          <View
            style={{
              width: "13%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>9</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>Waktu Penawaran / Transaksi</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text></Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>xxxxxx</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>xxxxxx</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
            }}
          >
            <Text>xxxxxx</Text>
          </View>
        </View>
        <View style={styles.borderFull}>
          <Text>SPESIFIKASI DATA</Text>
        </View>
        <View style={[styles.borderFullWithFlex, { height: 20 }]}>
          <View
            style={{
              width: "13%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>1</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>Legalitas Kepemilikan</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>SHM</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>SHM</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>SHM</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
            }}
          >
            <Text>SHM</Text>
          </View>
        </View>
        <View style={[styles.borderFullWithFlex, { height: 20 }]}>
          <View
            style={{
              width: "13%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>2</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>Luas Tanah (m{"\u00B2"})</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>200</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>100</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>100</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
            }}
          >
            <Text>100</Text>
          </View>
        </View>
        <View style={[styles.borderFullWithFlex, { height: 20 }]}>
          <View
            style={{
              width: "13%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>3</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>Bentuk Tanah</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>Menyerupai Persegi Panjang</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>Menyerupai Persegi Panjang</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>Menyerupai Persegi Panjang</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
            }}
          >
            <Text>Menyerupai Persegi Panjang</Text>
          </View>
        </View>
        <View style={[styles.borderFullWithFlex, { height: 20 }]}>
          <View
            style={{
              width: "13%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>4</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>Lebar Depan, Frontage (m)</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>12</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>12</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>1</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
            }}
          >
            <Text>1</Text>
          </View>
        </View>
        <View style={[styles.borderFullWithFlex, { height: 20 }]}>
          <View
            style={{
              width: "13%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>5</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>Lebar Jalan (m)</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>7</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>7</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>1</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
            }}
          >
            <Text>1</Text>
          </View>
        </View>
        <View style={[styles.borderFullWithFlex, { height: 20 }]}>
          <View
            style={{
              width: "13%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>6</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>Letak Tanah</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>Depan</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>Depan</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>Depan</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
            }}
          >
            <Text>Depan</Text>
          </View>
        </View>
        <View style={[styles.borderFullWithFlex, { height: 20 }]}>
          <View
            style={{
              width: "13%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>7</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>Kondisi Tanah</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>Tanah Matang</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>Tanah Matang</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>Tanah Matang</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
            }}
          >
            <Text>Tanah Matang</Text>
          </View>
        </View>
        <View style={[styles.borderFullWithFlex, { height: 20 }]}>
          <View
            style={{
              width: "13%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>8</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>Peruntukan</Text>
          </View>
          <View
            style={{
              width: "100%",
              height: 20,
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>Pemukiman / Rumah Tinggal / Hunian</Text>
          </View>
          <View
            style={{
              width: "100%",
              height: 20,
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>Pemukiman / Rumah Tinggal / Hunian</Text>
          </View>
          <View
            style={{
              width: "100%",
              height: 20,
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>Pemukiman / Rumah Tinggal / Hunian</Text>
          </View>
          <View
            style={{
              width: "100%",
              height: 20,
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
            }}
          >
            <Text>Pemukiman / Rumah Tinggal / Hunian</Text>
          </View>
        </View>
        <View style={[styles.borderFullWithFlex, { height: 20 }]}>
          <View
            style={{
              width: "13%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>9</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>Kontur Tanah / Topografi</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>Datar</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>Datar</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>Datar</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
            }}
          >
            <Text>Datar</Text>
          </View>
        </View>
        <View style={[styles.borderFullWithFlex, { height: 20 }]}>
          <View
            style={{
              width: "13%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>10</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>Luas Bangunan (m{"\u00B2"})</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>100</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>100</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>200</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
            }}
          >
            <Text>200</Text>
          </View>
        </View>
        <View style={[styles.borderFullWithFlex, { height: 20 }]}>
          <View
            style={{
              width: "13%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>11</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>Indikasi Nilai Properti</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text></Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "right",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>1.800.000.000</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "right",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>1.800.000.000</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "right",
              borderColor: "#000000",
            }}
          >
            <Text>1.710.000.000</Text>
          </View>
        </View>
        <View style={[styles.borderFullWithFlex, { height: 20 }]}>
          <View
            style={{
              width: "13%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>12</Text>
          </View>
          <View
            style={{
              width: "100%",
              height: 20,
              fontSize: 8,
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>Perkiraan RCN Bangunan (Rp. per m{"\u00B2"})</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text></Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "right",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>4.270.947</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "right",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>4.270.947</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "right",
              borderColor: "#000000",
            }}
          >
            <Text>4.270.947</Text>
          </View>
        </View>
        <View style={[styles.borderFullWithFlex, { height: 20 }]}>
          <View
            style={{
              width: "13%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>13</Text>
          </View>
          <View
            style={{
              width: "100%",
              height: 20,
              fontSize: 8,
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>Perkiraan Nilai Pasar Bangunan (Rp. per m{"\u00B2"})</Text>
          </View>
          <View
            style={{
              width: "100%",
              height: 20,
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text></Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "right",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>3.203.210</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "right",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>3.203.210</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "right",
              borderColor: "#000000",
            }}
          >
            <Text>3.203.210</Text>
          </View>
        </View>
        <View style={[styles.borderFullWithFlex, { height: 20 }]}>
          <View
            style={{
              width: "13%",
              height: 20,
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>14</Text>
          </View>
          <View
            style={{
              width: "100%",
              height: 20,
              fontSize: 8,
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>Indikasi Nilai Pasar Bangunan</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text></Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "right",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>640.642.002</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "right",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>640.642.002</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "right",
              borderColor: "#000000",
            }}
          >
            <Text>640.642.002</Text>
          </View>
        </View>
        <View style={[styles.borderFullWithFlex, { height: 20 }]}>
          <View
            style={{
              width: "13%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>15</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>Indikasi Nilai Tanah</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text></Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "right",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>1.159.357.998</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "right",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>1.159.357.998</Text>
          </View>
          <View
            style={{
              width: "100%",
              fontSize: 8,
              textAlign: "right",
              borderColor: "#000000",
            }}
          >
            <Text>1.069.357.998</Text>
          </View>
        </View>
        <View style={[styles.borderFullWithFlex, { height: 20 }]}>
          <View
            style={{
              width: "27.33%",
              fontSize: 8,
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>Indikasi Nilai Tanah / m{"\u00B2"}</Text>
          </View>
          <View
            style={{
              width: "24.22%",
              fontSize: 8,
              textAlign: "right",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>9.600.000</Text>
          </View>
          <View
            style={{
              width: "24.22%",
              fontSize: 8,
              textAlign: "right",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>11.593.580</Text>
          </View>
          <View
            style={{
              width: "24.22%",
              fontSize: 8,
              textAlign: "right",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Text>11.593.580</Text>
          </View>
          <View
            style={{
              width: "24.22%",
              fontSize: 8,
              textAlign: "right",
              borderColor: "#000000",
            }}
          >
            <Text>10.693.580</Text>
          </View>
        </View>
        <View
          style={[
            styles.borderFullWithFlex,
            { justifyContent: "flex-end", height: 50 },
          ]}
        >
          <View
            style={{
              width: "19.50%",
              height: 50,
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderLeftWidth: 1,
              borderRightWidth: 1,
            }}
          >
            <Image style={{ height: 50 }} src={logo} />
          </View>
          <View
            style={{
              width: "19.50%",
              height: 50,
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderRightWidth: 1,
            }}
          >
            <Image style={{ height: 50 }} src={logo} />
          </View>
          <View
            style={{
              width: "19.50%",
              height: 50,
              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
            }}
          >
            <Image style={{ height: 50 }} src={logo} />
          </View>
        </View>
        <View
          style={[styles.borderFullWithFlex, { justifyContent: "flex-end" }]}
        >
          <View
            style={{
              width: "19.50%",

              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderLeftWidth: 1,
              borderRightWidth: 1,
            }}
          >
            <Text>Foto Pembanding 1</Text>
          </View>
          <View
            style={{
              width: "19.50%",

              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
              borderLeftWidth: 1,
              borderRightWidth: 1,
            }}
          >
            <Text>Foto Pembanding 2</Text>
          </View>
          <View
            style={{
              width: "19.50%",

              fontSize: 8,
              textAlign: "center",
              borderColor: "#000000",
            }}
          >
            <Text>Foto Pembanding 3</Text>
          </View>
        </View>
      </View>
      {/* END : TABEL KEDUABELAS */}

      <Text
        style={styles.pageNumber}
        render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
        fixed
      />
    </Page>
  </Document>
);

Font.register({
  family: "Times",
  fontWeight: "bold",
  src: roboto,
});

const styles = StyleSheet.create({
  borderFull: {
    borderColor: "#000000",
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    // borderBottomWidth: 1,
    height: 18,
    fontSize: 8,
  },
  borderFullWithFlex: {
    flexDirection: "row",
    borderColor: "#000000",
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    height: 18,
    // borderBottomWidth: 1,
  },
  borderLeftRightWithFlex: {
    flexDirection: "row",
    borderColor: "#000000",
    borderLeftWidth: 1,
    borderRightWidth: 1,
    fontSize: 8,
    height: 18,
    width: "100%",
  },
  borderLeftRight: {
    borderColor: "#000000",
    borderLeftWidth: 1,
    borderRightWidth: 1,
    height: 18,
    fontSize: 8,
    width: "100%",
  },
  tr: {
    flexDirection: "row",
    // justifyContent: "center",
    width: "100%",
    height: "100%",
    fontSize: 8,
    // padding: "0px 5px 0px 5px",
    // alignItems: "center",
    // borderColor: '#bff0fd',
    // backgroundColor: '#bff0fd',
    // borderWidth: 3,
    // borderRightColor: "#90e5fc",
    // borderRightWidth: 3,
  },
  trLeft: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    height: "100%",
    fontSize: 8,
    // padding: "0px 5px 0px 5px",
    // alignItems: "center",
    // borderColor: '#bff0fd',
    // backgroundColor: '#bff0fd',
    // borderWidth: 3,
  },
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    fontFamily: "Oswald",
  },
  author: {
    fontSize: 12,
    textAlign: "center",
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 18,
    margin: 12,
    fontFamily: "Oswald",
  },
  text: {
    // margin: 12,
    fontSize: 8,
    // textAlign: "justify",
    // fontFamily: "Times-Roman",
    fontFamily: "Times",
    // textDecoration: "underline",
    // fontWeight: "bold",
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});

export default PDF;
