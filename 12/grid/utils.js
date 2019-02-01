export function oneOf (value, validList) {
    for (let i = 0; i < validList.length; i++) {
        if (validList[i] === value) {
            return true;
        }
    }
    return false;
};

export function findComponentDownward(context, componentName) {
    const childrens = context.$children;
    let children = null;

    if (childrens.length) {
        for (const child of childrens) {
            const name = child.$options.name;
            if (name === componentName) {
                children = child;
                break;
            }else {
                children = findComponentDownward(child, componentName);
                if (children) {
                    break;
                }
            }
        }
    }
    return children;
};

export function findBrothersComponents(context, componentName, exceptMe = true) {
    let res = context.$parent.$children.filter(item => {
        return item.$options.name === componentName;
    })
    if (exceptMe) {
        let index = res.findIndex(item => item.uid === context._uid);
        res.splice(index, 1);
    }
    return res;
};

export function findComponentUpward(context, componentName, componentNames) {
    if (typeof componentName === 'string') {
        componentNames = [componentName];
    } else {
        componentNames = componentName;
    }

    let parent = context.$parent;
    let name = parent.$options.name;
    while (parent && (!name || componentNames.indexOf(name) < 0)) {
        parent = parent.$parent;
        if (parent) name = parent.$options.name;
    }
    return parent;
};