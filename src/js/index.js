//сдесь производиться сборка всего проекта (в то числе и стили подгружаются в JS)

import main from '../sass/main.scss';

import personalQuery from './modules/personalQuery';
import beerQuery from './modules/beerQuery';

personalQuery();
beerQuery();