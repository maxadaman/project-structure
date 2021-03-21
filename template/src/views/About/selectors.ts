import { createSelector, Selector } from 'reselect';
import { RootStateType } from 'types/general';
import { IOffice } from 'types/about';

const getOffices:Selector<RootStateType, Array<IOffice>> = state => state.Global.officesCollection;

export const getHeadquarterOffices = createSelector<RootStateType, Array<IOffice>, Array<IOffice>>(
  [getOffices],
  offices => offices.filter(office => office.isHeadquarter)
);
