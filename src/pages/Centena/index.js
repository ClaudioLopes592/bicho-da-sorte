import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import Imagem from "../../components/Imagem";
import Header from "../../components/Header";

const Centena = () => {

  const [centena, setCentena] = useState('');

  function gerarCentena(min, max) {
    min = Math.ceil(0);
    max = Math.floor(999);
    const num = Math.floor(Math.random() * (max - min)) + min;
    setCentena(num)
  }

  const avestruz = [
    1, 2, 3, 4, 101, 102, 103, 104, 201, 202, 203, 204, 301, 302, 303, 304, 401, 402, 403, 404,
    501, 502, 503, 504, 601, 602, 603, 604, 701, 702, 703, 704, 801, 802, 803, 804, 901, 902, 903, 904
  ]

  const aguia = [
    5, 6, 7, 8, 105, 106, 107, 108, 205, 206, 207, 208, 305, 306, 307, 308, 405, 406, 407, 408,
    505, 506, 507, 508, 605, 606, 607, 608, 705, 706, 707, 708, 805, 806, 807, 808, 905, 906, 907, 908
  ]

  const burro = [
    9, 10, 11, 12, 109, 110, 111, 112, 209, 210, 211, 212, 309, 310, 311, 312, 409, 410, 411, 412,
    509, 510, 511, 512, 609, 610, 611, 612, 709, 710, 711, 712, 809, 810, 811, 812, 909, 910, 911, 912
  ]


  const borboleta = [
    13, 14, 15, 16, 113, 114, 115, 116, 213, 214, 215, 216, 313, 314, 315, 316, 413, 414, 415, 416,
    513, 514, 515, 516, 613, 614, 615, 616, 713, 714, 715, 716, 813, 814, 815, 816, 913, 914, 915, 916
  ]

  const cachorro = [
    17, 18, 19, 20, 117, 118, 119, 120, 217, 218, 219, 220, 317, 318, 319, 320, 417, 418, 419, 420, 
    517, 518, 519, 520, 617, 618, 619, 620, 717, 718, 719, 720, 817, 818, 819, 820, 917, 918, 919, 920
  ]

  const cabra = [
    21, 22, 23, 24, 121, 122, 123, 124, 221, 222, 223, 224, 321, 322, 323, 324, 421, 422, 423, 424, 
    521, 522, 523, 524, 621, 622, 623, 624, 721, 722, 723, 724, 821, 822, 823, 824, 921, 922, 923, 924
  ]

  const carneiro = [
    25, 26, 27, 28, 125, 126, 127, 128, 225, 226, 227, 228, 325, 326, 327, 328, 425, 426, 427, 428, 
    525, 526, 527, 528, 625, 626, 627, 628, 725, 726, 727, 728, 825, 826, 827, 828, 925, 926, 927, 928
  ]

  const camelo = [
    29, 30, 31, 32, 129, 130, 131, 132, 229, 230, 231, 232, 329, 330, 331, 332, 429, 430, 431, 432, 
    529, 530, 531, 532, 629, 630, 631, 632, 729, 730, 731, 732, 829, 830, 831, 832, 929, 930, 931, 932
  ]

  const cobra = [
    33, 34, 35, 36, 133, 134, 135, 136, 233, 234, 235, 236, 333, 334, 335, 336, 433, 434, 435, 436, 
    533, 534, 535, 536, 633, 634, 635, 636, 733, 734, 735, 736, 833, 834, 835, 836, 933, 934, 935, 936
  ]

  const coelho = [
    37, 38, 39, 40, 137, 138, 139, 140, 237, 238, 239, 240, 337, 338, 339, 340, 437, 438, 439, 440, 
    537, 538, 539, 540, 637, 638, 639, 640, 737, 738, 739, 740, 837, 838, 839, 840, 937, 938, 939, 940
  ]

  const cavalo = [
    41, 42, 43, 44, 141, 142, 143, 144, 241, 242, 243, 244, 341, 342, 343, 344, 441, 442, 443, 444, 
    541, 542, 543, 544, 641, 642, 643, 644, 741, 742, 743, 744, 841, 842, 843, 844, 941, 942, 943, 944
  ]

  const elefante = [
    45, 46, 47, 48, 145, 146, 147, 148, 245, 246, 247, 248, 345, 346, 347, 348, 445, 446, 447, 448, 
    545, 546, 547, 548, 645, 646, 647, 648, 745, 746, 747, 748, 845, 846, 847, 848, 945, 946, 947, 948
  ]

  const galo = [
    49, 50, 51, 52, 149, 150, 151, 152, 249, 250, 251, 252, 349, 350, 351, 352, 449, 450, 451, 452, 
    549, 550, 551, 552, 649, 650, 651, 652, 749, 750, 751, 752, 849, 850, 851, 852, 949, 950, 951, 952
  ]

  const gato = [
    53, 54, 55, 56, 153, 154, 155, 156, 253, 254, 255, 256, 353, 354, 355, 356, 453, 454, 455, 456, 
    553, 554, 555, 556, 653, 654, 655, 656, 753, 754, 755, 756, 853, 854, 855, 856, 953, 954, 955, 956
  ]

  const jacare = [
    57, 58, 59, 60, 157, 158, 159, 160, 257, 258, 259, 260, 357, 358, 359, 360, 457, 458, 459, 460, 
    557, 558, 559, 560, 657, 658, 659, 660, 757, 758, 759, 760, 857, 858, 859, 860, 957, 958, 959, 960
  ]

  const leao = [
    61, 62, 63, 64, 161, 162, 163, 164, 261, 262, 263, 264, 361, 362, 363, 364, 461, 462, 463, 464, 
    561, 562, 563, 564, 661, 662, 663, 664, 761, 762, 763, 764, 861, 862, 863, 864, 961, 962, 963, 964
  ]

  const macaco = [
    65, 66, 67, 68, 165, 166, 167, 168, 265, 266, 267, 268, 365, 366, 367, 368, 465, 466, 467, 468, 
    565, 566, 567, 568, 665, 666, 667, 668, 765, 766, 767, 768, 865, 866, 867, 868, 965, 966, 967, 968
  ]

  const porco = [
    69, 70, 71, 72, 169, 170, 171, 172, 269, 270, 271, 272, 369, 370, 371, 372, 469, 470, 471, 472, 
    569, 570, 571, 572, 669, 670, 671, 672, 769, 770, 771, 772, 869, 870, 871, 872, 969, 970, 971, 972
  ]

  const pavao = [
    73, 74, 75, 76, 173, 174, 175, 176, 273, 274, 275, 276, 373, 374, 375, 376, 473, 474, 475, 476, 
    573, 574, 575, 576, 673, 674, 675, 676, 773, 774, 775, 776, 873, 874, 875, 876, 973, 974, 975, 976
  ]

  const peru = [
    77, 78, 79, 80, 177, 178, 179, 180, 277, 278, 279, 280, 377, 378, 379, 380, 477, 478, 479, 480, 
    577, 578, 579, 580, 677, 678, 679, 680, 777, 778, 779, 780, 877, 878, 879, 880, 977, 978, 979, 980
  ]

  const touro = [
    81, 82, 83, 84, 181, 182, 183, 184, 281, 282, 283, 284, 381, 382, 383, 384, 481, 482, 483, 484, 
    581, 582, 583, 584, 681, 682, 683, 684, 781, 782, 783, 784, 881, 882, 883, 884, 981, 982, 983, 984
  ]

  const tigre = [
    85, 86, 87, 88, 185, 186, 187, 188, 285, 286, 287, 288, 385, 386, 387, 388, 485, 486, 487, 488, 
    585, 586, 587, 588, 685, 686, 687, 688, 785, 786, 787, 788, 885, 886, 887, 888, 985, 986, 987, 988
  ]

  const urso = [
    89, 90, 91, 92, 189, 190, 191, 192, 289, 290, 291, 292, 389, 390, 391, 392, 489, 490, 491, 492, 
    589, 590, 591, 592, 689, 690, 691, 692, 789, 790, 791, 792, 889, 890, 891, 892, 989, 990, 991, 992
  ]

  const veado = [
    93, 94, 95, 96, 193, 194, 195, 196, 293, 294, 295, 296, 393, 394, 395, 396, 493, 494, 495, 496, 
    593, 594, 595, 596, 693, 694, 695, 696, 793, 794, 795, 796, 893, 894, 895, 896, 993, 994, 995, 996
  ]

  const vaca = [
    97, 98, 99, 100, 197, 198, 199, 200, 297, 298, 299, 300, 397, 398, 399, 400, 497, 498, 499, 500, 
    597, 598, 599, 500, 697, 698, 699, 700, 797, 798, 799, 800, 897, 898, 899, 900, 997, 998, 999, 0
  ]

  return (
    <>
    <Header />
    <View style={styles.container} >
      <ScrollView 
      showsVerticalScrollIndicator={false}
      >
      <Text style={styles.titulo}>CENTENA</Text>
      <View style={styles.containerBotao} >
      <TouchableOpacity
        style={styles.centena}
        onPress={() => gerarCentena()}
      >
        <Text style={styles.textoBotao} >CLICK</Text>
      </TouchableOpacity>
      </View>
      <View>
        {avestruz.includes(centena) ?
          <Imagem
            texto="AVESTRUZ"
            img={require("../../Img/avestruz.jpg")}
          /> :
          aguia.includes(centena) ?
          <Imagem
            texto="ÁGUIA"
            img={require("../../Img/aguia.jpg")}
          /> :
          burro.includes(centena) ?
          <Imagem
            texto="BURRO"
            img={require("../../Img/burro.jpg")}
          /> :
          borboleta.includes(centena) ?
          <Imagem
            texto="BORBOLETA"
            img={require("../../Img/borboleta.jpg")}
          /> :
          cachorro.includes(centena) ?
          <Imagem
            texto="CACHORRO"
            img={require("../../Img/cachorro.jpg")}
          /> :
          cabra.includes(centena) ?
          <Imagem
            texto="CABRA"
            img={require("../../Img/cabra.jpg")}
          /> :
          carneiro.includes(centena) ?
          <Imagem
            texto="CARNEIRO"
            img={require("../../Img/carneiro.jpg")}
          /> :
          camelo.includes(centena) ?
          <Imagem
            texto="CAMELO"
            img={require("../../Img/camelo.jpg")}
          /> :
          cobra.includes(centena) ?
          <Imagem
            texto="COBRA"
            img={require("../../Img/cobra.jpg")}
          /> :
          coelho.includes(centena) ?
          <Imagem
            texto="COELHO"
            img={require("../../Img/coelho.jpg")}
          /> :
          cavalo.includes(centena) ?
          <Imagem
            texto="CAVALO"
            img={require("../../Img/cavalo.jpg")}
          /> :
          elefante.includes(centena) ?
          <Imagem
            texto="ELEFANTE"
            img={require("../../Img/elefante.jpg")}
          /> :
          galo.includes(centena) ?
          <Imagem
            texto="GALO"
            img={require("../../Img/galo.jpg")}
          /> :
          gato.includes(centena) ?
          <Imagem
            texto="GATO"
            img={require("../../Img/gato.jpg")}
          /> :
          jacare.includes(centena) ?
          <Imagem
            texto="JACARÉ"
            img={require("../../Img/jacare.jpg")}
          /> :
          leao.includes(centena) ?
          <Imagem
            texto="LEÃO"
            img={require("../../Img/leao.jpg")}
          /> :
          macaco.includes(centena) ?
          <Imagem
            texto="MACACO"
            img={require("../../Img/macaco.jpg")}
          /> :
          porco.includes(centena) ?
          <Imagem
            texto="PORCO"
            img={require("../../Img/porco.jpg")}
          /> :
          pavao.includes(centena) ?
          <Imagem
            texto="PAVÃO"
            img={require("../../Img/pavao.jpg")}
          /> :
          peru.includes(centena) ?
          <Imagem
            texto="PERU"
            img={require("../../Img/peru.jpg")}
          /> :
          touro.includes(centena) ?
          <Imagem
            texto="TOURO"
            img={require("../../Img/touro.jpg")}
          /> :
          tigre.includes(centena) ?
          <Imagem
            texto="TIGRE"
            img={require("../../Img/tigre.jpg")}
          /> :
          urso.includes(centena) ?
          <Imagem
            texto="URSO"
            img={require("../../Img/urso.jpg")}
          /> :
          veado.includes(centena) ?
          <Imagem
            texto="VEADO"
            img={require("../../Img/veado.jpg")}
          /> :
          vaca.includes(centena) ?
          <Imagem
            texto="VACA"
            img={require("../../Img/vaca.jpg")}
          /> :
          null
        }
      </View>
      {
        centena === "" ? <Text></Text> : 
        centena <= 9 ? 
          <Text style={styles.textoCentena}>{'00' + centena}</Text>
          :
          centena < 99 ? 
          <Text style={styles.textoCentena}>{'0' + centena}</Text> 
          :
          <Text style={styles.textoCentena}>{centena}</Text>
      }
      <View>
      <Text style={styles.msg}>BOA SORTE!</Text>
      </View>
      </ScrollView>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#a9a9a9"
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#53585C",
    textAlign: "center",
    marginBottom: 20
  },
  containerBotao: {
    justifyContent: "center",
    alignItems: "center"
  },
  centena: {
    width: 100,
    height: 100,
    backgroundColor: "#53585C",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    margin: 30
  },
  textoBotao: {
    color: "#A8A897",
    fontSize: 25,
    fontWeight: "bold"
  },
  textoCentena: {
    color: "#5C5353",
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20
  },
  msg: {
    fontSize: 30,
    textAlign: "center",
    margin: 30,
    color: "#5C5353",
    fontWeight: "bold"
  }
});

export default Centena;
