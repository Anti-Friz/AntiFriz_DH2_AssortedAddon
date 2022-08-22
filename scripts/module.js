import { Migration } from "../../../script/common/migration.js";

// Update list of skills
Migration.skills.eng = actor.data.data.skills.forbiddenLore.specialities.xenos = {
    "label": "Xenos",
    "isKnown": false,
    "advance": advance,
    "total": total,
    "cost": 0
}
update["data.skills.forbiddenLore"] = actor.data.data.skills.forbiddenLore;

Hooks.once("init", function () {
    game.system.model.Actor.character.skills.eng = { value: 0, ability: "int" };
});