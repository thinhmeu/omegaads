@extends('admin.layout')
@section('content')
    <main class="c-main">
        <div class="container-fluid">
            <div class="fade-in">
                <div class="card">
                    <div class="card-header">
                        Danh sách {{$type == 'website' ? 'Website' : 'Vị trí'}}
                        <div class="card-header-actions pr-1">
                            <a href="/admin/banner/updateSite/{{$type}}"><button class="btn btn-block btn-primary btn-sm mr-3" type="button">Thêm mới</button></a>
                        </div>
                    </div>
                    <div class="card-body">
                        <form action="" class="d-flex my-3">
                            <input name="s" type="search" placeholder="Tìm kiếm..." class="form-control" value="{{$s}}">
                            <button type="submit" class="btn btn-primary text-nowrap ml-3">Tìm kiếm</button>
                        </form>
                        <table class="table table-striped table-bordered datatable">
                            <thead>
                            <tr>
                                <th class="text-center w-5">ID</th>
                                <th>Tiêu đề</th>
                                <th class="text-center w-15">Thao tác</th>
                            </tr>
                            </thead>
                            <tbody>
                                @if(!empty($allSite)) @foreach($allSite as $item)
                                <tr>
                                    <td class="text-center">{{$item->id}}</td>
                                    <td>{{$item->title}}</td>
                                    <td class="text-center">
                                        <a class="btn btn-info" href="/admin/banner/updateSite/{{$type}}/{{$item->id}}"><svg class="c-icon"><use xlink:href="/admin/images/icon-svg/free.svg#cil-pencil"></use></svg></a>
                                        <a class="btn btn-danger" onclick="return confirm('Bạn có chắc muốn xóa?')" href="/admin/banner/deleteSite/{{$item->id}}"><svg class="c-icon"><use xlink:href="/admin/images/icon-svg/free.svg#cil-trash"></use></svg></a>
                                    </td>
                                </tr>
                                @endforeach @endif
                            </tbody>
                        </table>
                        {!! init_cms_pagination($page, $pagination) !!}
                    </div>
                </div>
            </div>
        </div>
    </main>
@endsection
