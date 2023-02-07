import allTransactions from './all_transactions.js';
import botwData from './botw_data.js';
import botwEquipment from './botw_equipment_cleaned.js';
import botwMonsters from './botw_monsters_cleaned.js';
import utils from './string.js';

const equipment = botwEquipment;
const monsters = botwMonsters;
const materials = botwData.data.materials;
const printer = utils.printer;

console.log(printer(botwData));
