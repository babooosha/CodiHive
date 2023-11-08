<template>
    <Header />
    <Menu />
    
    <div class="border-8 bg-white me-96">
    <form>
        <div class="space-y-12">
            <div class="border-b border-gray-900/10 pb-12">
            <h2 class="text-sm leading-7 rounded-t pl-4 py-2 font-bold text-white bg-gray-700">CARREGAMENTO DE FICHEIROS</h2>
            <p class="mt-1 pl-4 text-sm leading-6 text-gray-600">Explicação breve de como funciona</p>

            <div class="mt-10 mr-4 pl-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div class="sm:col-span-4">
                <h2 class="mb-4 text-base font-semibold leading-7 text-gray-900">Identificação</h2>
                <label for="username" class="block text-sm font-medium leading-6 text-gray-900">Projeto</label>
                <div class="mt-2">
                    <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-500 sm:max-w-md">
                    <input type="text" name="username" id="username" autocomplete="username" class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="inserir nome do projeto">
                    </div>
                </div>
                </div>

                <div class="sm:col-span-4 mb-10">
                <label for="username" class="block text-sm font-medium leading-6 text-gray-900">Responsável</label>
                <div class="mt-2">
                    <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-500 sm:max-w-md">
                    <input type="text" name="username" id="username" autocomplete="username" class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="jamesbond">
                    </div>
                </div>
                </div>

                <div class="sm:col-span-3">
                <label for="amostra-total" class="block text-sm font-medium leading-6 text-gray-900">Amostra Total</label>
                <div class="mt-2">
                    <input type="text" name="amostra-total" id="amostra-total" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6">
                </div>
                </div>

                <div class="sm:col-span-3">
                <label for="amostra-carregada" class="block text-sm font-medium leading-6 text-gray-900">Amostra Carregada</label>
                <div class="mt-2">
                    <input type="text" name="amostra-carregada" id="amostra-carregada" autocomplete="family-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6">
                </div>
                </div>

                <div class="sm:col-span-4">
                <label for="vaga" class="block text-sm font-medium leading-6 text-gray-900">Vaga</label>
                <div class="mt-2">
                    <input id="vaga" name="vaga" type="text" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6">
                </div>
                </div>

                <div class="sm:col-span-3">
                <label for="dropdown" class="block text-sm font-medium leading-6 text-gray-900">Dropdown</label>
                <div class="mt-2">
                    <select id="dropdown" name="dropdown" autocomplete="dropdown-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:max-w-xs sm:text-sm sm:leading-6">
                    <option>Item 1</option>
                    <option>Item 2</option>
                    <option>Item 3</option>
                    </select>
                </div>
                </div>

                <div class="col-span-full">
                <label for="id-job" class="block text-sm font-medium leading-6 text-gray-900">Número job interno do cliente</label>
                <div class="mt-2">
                    <input type="text" name="id-job" id="id-job" autocomplete="id-job" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6">
                </div>
                </div>
                                
                <div class="col-span-full">
                <label for="cover-photo" class="block text-sm font-medium leading-6 text-gray-900">Uploads</label>
                <div class="mt-2 me-96 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 bg-gray-100">
                    <div class="text-center">
                    <svg class="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clip-rule="evenodd" />
                    </svg>
                    <div class="mt-4 flex text-sm leading-6 text-gray-600">
                        <label for="file-upload" class="relative cursor-pointer rounded-md px-1 border-2 border-grey-500 bg-white font-semibold text-gray-700 focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 hover:text-blue-500">
                        <span>Selecionar do computador</span>
                        <input id="file-upload" name="file-upload" type="file" class="sr-only">
                        </label>
                        <p class="pl-1">ou arrastar e inserir</p>
                    </div>
                    <p class="text-xs leading-5 text-gray-600">CSV, XLS, TXT até 10MB</p>
                    </div>
                </div>
                </div>
            </div>
            </div>

            <div class="border-b border-gray-900/10 pb-12 px-3">
            <h2 class="text-base font-semibold leading-7 text-gray-900">Ficheiros carregados</h2>
            <p class="mt-1 text-sm leading-6 text-gray-600">Aqui aparecem todos os ficheiros carregados com indicação da respetiva data</p>
            </div>

            
        </div>

        <div class="mt-6 mr-4 flex items-center justify-end gap-x-6">
            <button type="button" class="text-sm font-semibold leading-6 text-gray-900 hover:underline">Cancel</button>
            <button type="submit" class="rounded-md bg-gray-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500">Save</button>
        </div>
    </form>
    </div>
</template>

<script>
import Header from "@/components/template/Header.vue"
import Menu from "@/components/template/Menu.vue"

export default {
    name: 'DropZone',
    components: { Header, Menu },

}
</script>

<style>
   
</style>