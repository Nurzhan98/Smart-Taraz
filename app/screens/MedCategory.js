import React, { Component } from 'react'
import {View, StyleSheet, Text } from 'react-native'
import HeaderBack from '../components/HeaderBack';
import { container } from '../styles/styles';
import { ScrollView } from 'react-native-gesture-handler';


export default class MedCategory extends Component {
    render() {
        const { navigation }= this.props

        const categoryData = [
            {content: '1) дети;'},
            {content: '2) лица, зарегистрированные в качестве безработных;'},
            {content: '3) неработающие беременные женщины; '},
            {content: '4) неработающее лицо (один из законных представителей ребенка), воспитывающее ребенка (детей) до достижения им (ими) возраста трех лет, за исключением лиц, предусмотренных подпунктом'},
            {content: '5) лица, находящиеся в отпусках в связи с беременностью и родами, усыновлением (удочерением) новорожденного ребенка (детей), по уходу за ребенком (детьми) до достижения им (ими) возраста трех лет; '},
            {content: '6) неработающие лица, осуществляющие уход за ребенком-инвалидом; '},
            {content: '7) получатели пенсионных выплат, в том числе участники и инвалиды Великой Отечественной войны; '},
            {content: '8) лица, отбывающие наказание по приговору суда в учреждениях уголовно-исполнительной (пенитенциарной) системы (за исключением учреждений минимальной безопасности);'},
            {content: '9) лица, содержащиеся в следственных изоляторах; '},
            {content: '10) неработающие оралманы;'},
            {content: '11) многодетные матери, награжденные подвесками "Алтын алқа", "Күміс алқа" или получившие ранее звание "Мать-героиня", а также награжденные орденами "Материнская слава" I и II степени;'},
            {content: '12) инвалиды;'},
            {content: '13) лица, обучающиеся по очной форме обучения в организациях среднего, технического и профессионального, послесреднего, высшего образования, а также послевузовского образования'},
        ]
        return (
            <View style={styles.container} >
                <HeaderBack title='Льготная категория' navigation={navigation} />
                <View style={styles.newsWrap}>
                    <ScrollView>
                        <Text style={styles.newsTitle}>
                            К ЛИЦАМ, ВЗНОСЫ ЗА КОТОРЫЕ ПЛАТИТ ГОСУДАРСТВО, ОТНОСЯТСЯ СЛЕДУЮЩИЕ КАТЕГОРИИ ГРАЖДАН:
                        </Text>
                        {
                            categoryData.map((el, i) => {
                                return (
                                    <Text key={i} style={styles.newsContent}>
                                        {/* &nbsp;
                                        &nbsp;
                                        &nbsp; */}
                                        {el.content}
                                    </Text>
                                )
                            })
                        }
                        <Text style={styles.newsFooter}>
                            20 июля 2020 г., 17:40
                        </Text>
                    </ScrollView>
                </View>
            </View>
        )
    }
}; 

const styles = StyleSheet.create({
    container,
    newsWrap: {
        marginTop: 20,
        backgroundColor: '#fff',
        width: '100%',
        height: 550,
        borderRadius: 10,
        paddingVertical: 15,
        paddingHorizontal: 10,
        alignItems: 'center'
    },
    newsTitle: {
        alignSelf: 'center',
        fontWeight: '700',
        textAlign: 'center'
    },
    newSubTitle: {
        textAlign: 'center',
        fontWeight: '700',
        marginTop: 10
    },
    newsContent: {
        textAlign: 'justify',
        marginTop: 10
    },
    newsFooter: {
        marginTop: 50
    }
})