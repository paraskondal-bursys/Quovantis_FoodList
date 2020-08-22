import {StyleSheet} from 'react-native';
import {Dimens, Colors} from '../Utils/Theme';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: Dimens.twenty,
    marginVertical: Dimens.eight,
  },
  header: {
    fontSize: Dimens.thirtyTwo,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: Dimens.twentyFive,
  },

  //Davinder Style
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
    padding: Dimens.ten,
  },
  PageHeaderContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: Dimens.ten,
  },
  staticTextStyle: {
    fontSize: Dimens.thirtyFive,
    fontWeight: '500',
  },
  closeButtonContainer: {
    paddingVertical: Dimens.ten,
  },
  messageIconContainer: {
    padding: Dimens.fifteen,
    backgroundColor: '#517fa4',
    borderRadius: Dimens.hundred,
    position: 'absolute',
    right: -Dimens.five,
    top: Dimens.thirtyFive,
  },
  categoryImageStyle: {
    width: Dimens.fifty,
    height: Dimens.fifty,
    borderRadius: Dimens.five,
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  categoryHeader: {
    flexDirection: 'row',
    padding: Dimens.five,
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  leftChildContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  categoryTextStyle: {
    fontSize: Dimens.sixteen,
    color: 'white',
    textAlign: 'center',
    paddingHorizontal: Dimens.ten,
  },
  categoryServingTextStyle: {
    fontSize: Dimens.seventeen,
    textAlign: 'center',
  },
  barContainer: {
    flex: 1,
    marginHorizontal: Dimens.ten,
    backgroundColor: 'white',
    borderRadius: Dimens.five,
    overflow: 'hidden',
  },
});