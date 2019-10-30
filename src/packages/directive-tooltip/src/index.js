const Tooltip = {
    bind(el, binding) {
        let props = binding.value;
        if (typeof binding.value === "string") {
            props = {
                text: binding.value,
                position: "top"
            };
        }
        el.classList.add("c-tooltip", `c-tooltip--${props.position || "top"}`);
        el.setAttribute("data-tooltip", props.text);
    }
};

export default Tooltip;
