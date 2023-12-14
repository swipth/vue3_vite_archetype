import {TranslateResult} from "vue-i18n";
import {ElMessage, ElMessageBox} from "element-plus";

export const showMessage = (content: string, type = "error") => {
  if (type == "error")
    ElMessage({message: content, type: "error"});
  ElMessage({message: content, type: "success"})
}
export const showErrorModal = (content: string | TranslateResult) => {
  ElMessageBox({message: content}).then(()=> {})
}

