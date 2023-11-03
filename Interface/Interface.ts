export interface IModal {
    setModalVisible: (modalVisible: boolean) => void;
    handleTask: () => void;
    setTask: (task: string) => void;
    setStatus: (status: string) => void;
    modalVisible: boolean;
    task: string;
    status: string;
}

export interface IArray {
    id?: number;
    task?: string;
    status?: string;
}


export interface IDetalhes {
    setDetalheVisible: (detalheVisible: boolean) => void;
    detalheVisible: boolean;
    objTask: IArray;
}