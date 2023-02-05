const { test, expect } = require('../fixtures');

const dimensions = [
    {length: 0, width: 10, height: 10, weight: 5},
    {length: 0, width: 10, height: 10, weight: 0},
    {length: 20.2, width: 20.3, height: 1, weight: 5},
    {length: 10, width: 10, height: 10, weight: 45.17345678},
    {length: 55, width: 10, height: 10, weight: 1},
];

dimensions.forEach(data => {
    test(`Check volume and volume weight calculation for dimensions ${JSON.stringify(data)}`, async ({ mainPage })  => {
        const { length, width, height, weight } = data;
        const volume = calculateVolume(length, width, height);
        const volumeWeight = calculateVolumeWeight(volume, weight);

        await mainPage.open();
        await mainPage.iKnowDimensionsTab.click();
        await mainPage.fillDimensions(length, width, height, weight);
        await expect(mainPage.volumeWeightResultLabel).toHaveText(
            `Объемный вес товара: ${volumeWeight} кг`);
        await expect(mainPage.volumeResultLabel).toHaveText(
            `Объем товара: ${volume} л`);
    });
});

function calculateVolume(length, width, height) {
    return Math.round(((length * width * height) / 1000) * 10) / 10;
}

function calculateVolumeWeight(volume, weight) {
    return Math.round(Math.max(volume / 5, weight) * 10) / 10;
}