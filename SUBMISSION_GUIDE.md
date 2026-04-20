# Chrome Web Store 提交审核资料指南

## 1. 商店基本信息 (General Information)
*   **Name:** ZoomToolkit
*   **Summary (132 chars max):** 增强 Zoom 网页录像播放体验：一键切换全屏/剧场模式，享受无干扰的沉浸式观看。
*   **Description (Detailed):**
    ZoomToolkit 是一款专为 Zoom 网页端录制播放设计的效率工具。它通过一系列贴心的功能，让您在复盘会议、在线课程学习时更加专注。

    ✨ **核心功能：**
    - **全窗口剧场模式 (Theater Mode)：** 按下快捷键 `T` 即可让视频撑满整个浏览器窗口，去除导航栏、侧边栏等视觉干扰。
    - **极简快捷操作：** 使用 `T` 开启/关闭剧场模式，使用 `Esc` 快速退出，操作流畅自然。
    - **自适应布局：** 自动适配 Zoom 的播放器组件，确保视频比例完美展示。

    ⌨️ **快捷键支持：**
    - `T`: 开启/关闭全窗口剧场模式
    - `Esc`: 退出剧场模式

    🔒 **隐私与安全：**
    本扩展仅在指定的 Zoom 录像页面运行，不收集、不上传任何个人数据或会议内容。

## 2. 视觉素材清单 (Visual Assets)
*   **Icon (128x128):** `icon128.png` (已生成)
*   **Promotional Tile (440x280):** `promo_440x280.png` (已生成)
*   **Screenshot (1280x800):** `screenshot_1.png` (已生成，建议在实际 Zoom 页面开启剧场模式后手动截一张真实的图替换此文件)

## 3. 隐私合规说明 (Privacy Compliance)
*   **Single Purpose:** 本扩展的唯一用途是增强 Zoom 录像播放页面的 UI 体验，提供更沉浸的观看模式。
*   **Permission Justification (`activeTab`):** 仅在用户主动访问并停留在 Zoom 录像页面时，用于调整页面样式以实现全窗口模式。

---
**提交建议：**
在开发者后台（Chrome Developer Dashboard）上传完成后，请确保检查“分发”选项，选择适合的地区。由于本插件不涉及远程数据交换，审核通常较快（1-3个工作日）。
