export const useFormRules = () => {
  return {
    ruleRequired: (v) => !!v || "必須輸入",
    ruleEmail: (value) => {
      const pattern =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return pattern.test(value) || "Email格式不正確";
    },
    rulePassLen: (v) => (!!v && v.length >= 8) || "密碼必須超過8碼",
  };
};
