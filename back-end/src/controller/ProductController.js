const ProductModel = require("../model/ProductModel");

class ProductController {
  async createProduct(request, response) {
    const product = new ProductModel(request.body);

    product
      .save()
      .then(() => {
        return response
          .status(200)
          .json({ success: "Produto cadastro com sucesso!" });
      })
      .catch((error) => {
        return response.status(500).json({ error: error });
      });
  }

  async saveProductImage(request, response) {
    const { id } = request.params;

    if (!request.file.location) {
      request.file.location = `/productFiles/${request.file.key}`;
    }

    const {
      originalname: img_nome,
      key: img_key,
      location: img_url,
    } = request.file;

    const image = { img_nome, img_key, img_url };

    await ProductModel.update(image, { where: { id: id } })
      .then(() => {
        return response
          .status(200)
          .json({ success: "Imagem do produto salva com sucesso!" });
      })
      .catch((error) => {
        return response.status(500).json({ error: error });
      });
  }

  async findAllProducts(request, response) {
    const productList = await ProductModel.findAll();

    if (productList.length) {
      return response.status(200).json({ success: productList });
    } else {
      return response
        .status(500)
        .json({ error: "Nenhum produto foi encontrado!" });
    }
  }

  async findAllProductsType(request, response) {
    const { type } = request.params;

    if (type === "todos") {
      const productList = await ProductModel.findAll();

      if (productList.length) {
        return response.status(200).json({ success: productList });
      } else {
        return response
          .status(500)
          .json({ error: "Nenhum produto foi encontrado!" });
      }
    }

    const productList = await ProductModel.findAll({ where: { tipo: type } });

    if (productList.length) {
      return response.status(200).json({ success: productList });
    } else {
      return response
        .status(500)
        .json({ error: "Nenhum produto foi encontrado!" });
    }
  }
}

module.exports = new ProductController();
