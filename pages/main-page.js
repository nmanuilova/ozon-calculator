exports.MainPage = class MainPage {
    constructor(page) {
        this.page = page;
        this.dimensionsSection = this.page.locator('#dimensions');
        this.iKnowDimensionsTab = this.page.locator('[href="#dimensions"]');
        this.lengthInput = this.dimensionsSection.getByLabel('Длина');
        this.widthInput = this.dimensionsSection.getByLabel('Ширина');
        this.heightInput = this.dimensionsSection.getByLabel('Высота');
        this.weightInput = this.dimensionsSection.getByLabel('Вес');
        this.volumeResultLabel = this.dimensionsSection.locator('.row').nth(3);
        this.volumeWeightResultLabel = this.dimensionsSection.locator('.row').nth(2);
    }

    async open() {
        await this.page.goto('/');
    }

    async fillDimensions(length, width, height, weight) {
        await this.lengthInput.fill(length.toString());
        await this.widthInput.fill(width.toString());
        await this.heightInput.fill(height.toString());
        await this.weightInput.fill(weight.toString());
    }
};