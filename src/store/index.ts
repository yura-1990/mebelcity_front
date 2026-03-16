import { create } from 'zustand'
import axios from '../axios/index'

export type SingleCatalog = {
    id: number,
    name: string | null,
    parent_id: number | null,
    image_laptop: string | null,
    image_ipad: string | null,
    image_phone: string | null,
    seo_description: string | null,
    seo_keywords: string | null,
    seo_title: string | null,
}

export type Product = {
    id: number,
    name: string | null,
    price: string | null,
    description: string | null,
    images: string[] | null,
    image_laptop?: string[] | null,
    catalog_id: number | null,
    exist: number | null,
    discount: number | null,
    discount_status: number | null,
    translations?: never[]
}

export type Catalogs = {
    id: number,
    name: string | null,
    parent_id: number | null,
    image_laptop?: string | null,
    image_ipad?: string | null,
    image_phone?: string | null,
    seo_description?: string | null,
    seo_keywords?: string | null,
    seo_title?: string | null,
    children_recursive: SingleCatalog[]
}
export type Galleries = {
    id: number,
    name: string | null,
    catalog_id: number | null,
    image: string,
}

type State = {
    catalogs?: Catalogs[] | []
    products?: Product[]
    loading: boolean
    error: boolean
    message: string
    galleries: Galleries[]
}

type Store = {
    state: State;
    getCatalogs: () => Promise<void>;
    getProducts: () => Promise<void>;
    getGalleries: () => Promise<void>;
};

export const useStore = create<Store>((set) => ({
    state:  {
        catalogs: [],
        products: [],
        galleries: [],
        loading: false,
        error: false,
        message: ''
    },

    getCatalogs: async () => {
        try {
            set((prev) => ({
                state: {
                    ...prev.state,
                    loading: true,
                    error: false,
                    message: ''
                }
            }));

            const response = await axios.get(`/catalog/all`);

            if (response.status === 200) {
                set((prev) => ({
                    state: {
                        ...prev.state,
                        catalogs: response.data.data,
                        loading: false,
                        error: false,
                        message: ''
                    }
                }));
            }
        } catch (err: unknown) {
            if (err instanceof Error) {
                set((prev) => ({
                    state: {
                        ...prev.state,
                        error: true,
                        message: err.message,
                        loading: false
                    }
                }));
            } else {
                set((prev) => ({
                    state: {
                        ...prev.state,
                        error: true,
                        message: 'Unexpected error occurred',
                        loading: false
                    }
                }));
            }
        }
    },

    getProducts: async () => {
        try {
            set((prev) => ({
                state: {
                    ...prev.state,
                    loading: true,
                    error: false,
                    message: ''
                }
            }));

            const response = await axios.get(`/catalog/mebel/all`);

            if (response.status === 200) {
                set((prev) => ({
                    state: {
                        ...prev.state,
                        products: response.data,
                        loading: false,
                        error: false,
                        message: ''
                    }
                }));

            }
        } catch (err: unknown) {
            if (err instanceof Error) {
                set((prev) => ({
                    state: {
                        ...prev.state,
                        error: true,
                        message: err.message,
                        loading: false
                    }
                }));
            } else {
                set((prev) => ({
                    state: {
                        ...prev.state,
                        error: true,
                        message: 'Unexpected error occurred',
                        loading: false
                    }
                }));
            }
        }
    },

    getGalleries: async () => {
        try {
            set((prev) => ({
                state: {
                    ...prev.state,
                    loading: true,
                    error: false,
                    message: ''
                }
            }));

            const response = await axios.get(`/catalog/gallery/all`);

            if (response.status === 200) {
                set((prev) => ({
                    state: {
                        ...prev.state,
                        galleries: response.data.galleries,
                        catalogs: response.data.catalogs,
                        loading: false,
                        error: false,
                        message: ''
                    }
                }));

            }
        } catch (err: unknown) {
            if (err instanceof Error) {
                set((prev) => ({
                    state: {
                        ...prev.state,
                        error: true,
                        message: err.message,
                        loading: false
                    }
                }));
            } else {
                set((prev) => ({
                    state: {
                        ...prev.state,
                        error: true,
                        message: 'Unexpected error occurred',
                        loading: false
                    }
                }));
            }
        }
    }



}))