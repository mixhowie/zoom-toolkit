.PHONY: zip

# 定义变量
TIMESTAMP := $(shell date +%Y%m%d_%H%M%S)
ZIP_NAME := zoom-toolkit-$(TIMESTAMP).zip
ZIP_PATH := temp/$(ZIP_NAME)

zip:
	@mkdir -p temp
	@echo "正在打包扩展程序到 $(ZIP_PATH)..."
	@# 进入 extension 目录进行压缩，确保 manifest.json 在 zip 的根目录
	@cd extension && zip -r ../$(ZIP_PATH) ./*
	@echo "打包成功！"
