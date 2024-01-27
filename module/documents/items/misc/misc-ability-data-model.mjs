import {FU} from '../../../helpers/config.mjs';

export class MiscAbilityDataModel extends foundry.abstract.TypeDataModel {
	static defineSchema() {
		const { SchemaField, StringField, HTMLField, BooleanField, NumberField } = foundry.data.fields;
		return {
			subtype: new SchemaField({ value: new StringField() }),
			summary: new SchemaField({ value: new StringField() }),
			description: new HTMLField(),
			isFavored: new SchemaField({ value: new BooleanField() }),
			showTitleCard: new SchemaField({ value: new BooleanField() }),
			isMartial: new SchemaField({ value: new BooleanField() }),
			quality: new SchemaField({ value: new StringField() }),
			isEquipped: new SchemaField({
				value: new BooleanField(),
				slot: new StringField(),
			}),
			useWeapon: new SchemaField({
				accuracy: new SchemaField({ value: new BooleanField() }),
				damage: new SchemaField({ value: new BooleanField() }),
				hrZero: new SchemaField({ value: new BooleanField() }),
			}),
			attributes: new SchemaField({
				primary: new SchemaField({ value: new StringField({ initial: 'dex', choices: Object.keys(FU.attributes) }) }),
				secondary: new SchemaField({ value: new StringField({ initial: 'ins', choices: Object.keys(FU.attributes) }) }),
			}),
			accuracy: new SchemaField({ value: new NumberField({ integer: true }) }),
			damage: new SchemaField({
				hasDamage: new SchemaField({ value: new BooleanField() }),
				value: new NumberField(),
				type: new SchemaField({ value: new StringField({ initial: 'physical', blank: true, choices: Object.keys(FU.damageTypes) }) }),
			}),
			impdamage: new SchemaField({
				hasImpDamage: new SchemaField({ value: new BooleanField() }),
				value: new NumberField(),
				impType: new SchemaField({ value: new StringField({ initial: 'minor', choices: ['minor', 'heavy', 'massive'] }) }),
				type: new SchemaField({ value: new StringField({ initial: 'physical', blank: true, choices: Object.keys(FU.damageTypes) }) }),
			}),
			isBehavior: new BooleanField(),
			weight: new SchemaField({ value: new NumberField({ initial: 1 }) }),
			hasClock: new SchemaField({ value: new BooleanField() }),
			progress: new SchemaField({
				current: new NumberField({ initial: 0, integer: true }),
				step: new NumberField({ initial: 1, integer: true }),
				max: new NumberField({ initial: 6, integer: true }),
			}),
			source: new SchemaField({ value: new StringField() }),
			rollInfo: new SchemaField({
				useWeapon: new SchemaField({
					hrZero: new SchemaField({ value: new BooleanField() }),
					accuracy: new SchemaField({ value: new BooleanField() }),
					damage: new SchemaField({ value: new BooleanField() }),
				}),
				attributes: new SchemaField({
					primary: new SchemaField({ value: new StringField({ initial: 'dex', choices: Object.keys(FU.attributes) }) }),
					secondary: new SchemaField({ value: new StringField({ initial: 'ins', choices: Object.keys(FU.attributes) }) }),
				}),
				accuracy: new SchemaField({ value: new NumberField() }),
				damage: new SchemaField({
					hasDamage: new SchemaField({ value: new BooleanField() }),
					type: new SchemaField({ value: new StringField({ initial: 'physical', blank: true, choices: Object.keys(FU.damageTypes) }) }),
					value: new NumberField(),
				}),
			}),
			isOffensive: new SchemaField({ value: new BooleanField() }),
			hasRoll: new SchemaField({ value: new BooleanField() }),
		};
	}
}
