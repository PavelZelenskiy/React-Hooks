import React from "react";
import CollapseWrapper from "../common/collapse";

const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>

            <ListComponent>
                <Component />
                <Component />
                <Component />
            </ListComponent>
        </CollapseWrapper>
    );
};

const Component = () => {
    return <div>Компонент списка</div>;
};

const ListComponent = ({ children }) => {
    return React.Children.map(children, (child) => {
        // console.log(children);
        // console.log(child);

        return (
            <div>
                {children.indexOf(child) + 1} {child}
            </div>
        );
    });
};

export default ChildrenExercise;
