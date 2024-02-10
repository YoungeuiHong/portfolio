# 1. 개요
> 💡 Excel Export / Import 기능을 쉽게 구현할 수 있도록 개발한 모듈입니다.

* __`who`__ : 개인 프로젝트
* __`when`__ : 2022.01 - 2022.05
* __`why`__ : 엑셀 Export / Import 기능 구현에 필요한 보일러 플레이트 코드를 줄이기 위해

### 🛠 기술 스택
* Java, Apache POI, React, Ant Design

### 👀 무엇을 배웠나요?
* Java Custom Annotation 제작 방법
* JUnit을 사용한 단위 테스트 작성 방법
* DFS와 BFS를 사용한 트리 구조 탐색 방법


# 2. 문제 의식

### 🧐 많은 양의 보일러 플레이트 코드, 줄일 수 없을까?

- Workbook 생성, Cell Style 생성 등을 하다보면 코드가 수백 줄을 초과하게 되는데, 보일러 플레이트 코드를 줄일 수 없을까 고민하게 됨
- 삼성엔지니어링 VCS 프로젝트를 마치고 EDP 프로젝트에 합류하였는데, EDP 프로젝트에서도 유사한 엑셀 Export / Import 기능을 개발하고 있음을 발견함. 거의 유사한 기능인데도 많은 양의 코드를 다시 작성해야 하는 것이 비효율적이라고 생각하게 됨.


### 🤔 다양한 요구사항을 수용할 수 있는 엑셀 모듈을 만들 수 없을까?

- 같은 템플릿의 엑셀이더라도 공종에 따라 특정 컬럼은 보이지 않게 하거나, 헤더의 명칭 / 셀 색상을 변경해야 하는 등의 차이가 있었음
- 새로운 요구사항이 들어올 때마다 조건문이나 파라미터를 추가하다 보면 버그의 발생률이 높아졌음
- 서로 다른 요구사항을 충분히 수용할 수 있도록 개발해야 할 필요성을 느끼게 됨


# 3. 문제 해결 과정

### 🤩 Java 커스텀 어노테이션을 활용한 엑셀 Export 모듈 발견

[아 엑셀다운로드 개발,,, 쉽고 빠르게 하고 싶다 (feat. 엑셀 다운로드 모듈 개발기) | 우아한형제들 기술블로그](https://techblog.woowahan.com/2698/)

- 문제 해결 방법을 찾다가 우아한 형제들에서 개발한 엑셀 Export 모듈을 발견하게 됨
- JPA에서 DB column을 `@Column`으로 표시하는 것과 비슷하게 DTO에서 엑셀에 표시하고 싶은 필드를 `@ExcelColum`으로 표시하여 엑셀을 Export하는 모듈이었음
- 이 모듈의 장점은 엑셀을 Export하는 곳에서 엑셀 헤더 영역의 구성과 스타일 등을 직접 정의할 수 있다는 것. 이 모듈을 활용하면 다양한 요구사항을 수용할 수 있겠다는 생각이 듦.

### 🚀 개발 목표 설정
- 우아한 형제들의 엑셀 모듈을 프로젝트 현장에 적용하기에는 몇 가지 아쉬운 점이 있어서 아래 기능을 추가 개발하기로 함
  - 기존의 모듈은 1-level의 헤더만 표현할 수 있는 상태인데, 2-level 이상의 계층 구조의 헤더도 표현할 수 있도록 하기
  - 기존의 모듈에는 Excel Export 기능만 있는 상태이므로, Excel Import도 가능하도록 구현하기
  - 서버가 아닌 클라이언트단에서 헤더를 정의하는 경우에도 엑셀 Export / Import가 가능하도록 구현하기

# 4. 기술적 챌린지

### 1️⃣ 계층 구조의 헤더 표현하기
![header_example](/assets/markdown/embed/excel/header.png)
- 위와 같이 그룹 헤더를 표현하기 위해선 셀을 병합할 영역을 계산해야 함
- 이를 위해 `java.lang.reflect`를 사용하여 DTO 내부의 `@ExcelColumn`이 붙은 필드를 탐색하면서, 필드 객체 내에 `@ExcelColumn`이 붙은 자식 필드가 있는 경우는 그룹 헤더로 취급하고, 자식 필드가 없는 경우는 말단 헤더 노드로 취급함
- BFS 방식으로 DTO 내의 모든 필드를 탐색하면서 각 헤더 노드의 행과 열의 시작 지점과 끝 지점의 인덱스를 계산함
- 이렇게 계산한 인덱스 정보를 `ExcelHeaderCell` 객체 안에 저장해서 엑셀을 Export / Import할 때 사용할 수 있도록 함

### 2️⃣ Import 기능 구현하기

- 기본적으로 헤더 다음 행부터를 데이터 영역으로 인식하고 Import하되, 행/열 시작 지점이나 컬럼 위치가 DTO에 기재된 순서와 다른 경우 DTO 위에 `@ExcelImport` 어노테이션을 붙여 변경할 수 있도록 함
- `JsonPointer`를 사용하여 엑셀에서 읽은 데이터를 DTO에 셋팅하여 `List<DTO>`를 반환하도록 구현함

```java
@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
public @interface ExcelImport {
    int rowStartIndex() default -1;
    int columnStartIndex() default 0;
    boolean isColumnIndexAssigned() default false;
} 
```

### 3️⃣ 클라이언트단에서 정의한 헤더로 Export / Import하는 기능 구현하기

- 클라이언트에 정의한 헤더 정보를 `HeaderNode` 객체를 통해 서버에 전달할 수 있도록 구현함

```typescript
export type NodeType = 'String' | 'Float' | 'Integer';

export type RGB = {
    r: number,
    g: number,
    b: number
}

export interface HeaderNode {
    type: NodeType;
    columnName: string;
    fieldName: string;
    headerRGB: RGB;
    bodyRGB: RGB;
    children: HeaderNode[];
}
```

# 5. 성과

아래와 같은 엑셀 파일을 Export할 때 기존의 코드와 엑셀 모듈을 도입했을 때의 코드를 비교해서 살펴보자.

![export_sample](/assets/markdown/embed/excel/excel_sample.png)

### ⏮ Before: 기존의 코드
- `CellStyle`을 생성하는 코드와 그룹 헤더의 셀을 병합하는 코드 등 작성해야 하는 코드의 양이 많다.
- 여러 역할을 하는 코드가 섞여 있어서 헤더의 컬럼 구성을 파악하기 어렵다.
```java
try {
    // 엑셀 파일 생성
    Workbook workbook = new XSSFWorkbook();
    Sheet sheet = workbook.createSheet("Sheet1");

    // 헤더 CellStyle 생성
    XSSFCellStyle headerStyle = (XSSFCellStyle) workbook.createCellStyle();
    headerStyle.setFillForegroundColor(new XSSFColor(new byte[]{(byte) 223, (byte) 235, (byte) 246}, new DefaultIndexedColorMap()));
    headerStyle.setFillPattern(FillPatternType.SOLID_FOREGROUND);
    headerStyle.setAlignment(HorizontalAlignment.CENTER);
    headerStyle.setBorderTop(BorderStyle.THIN);
    headerStyle.setBorderLeft(BorderStyle.THIN);
    headerStyle.setBorderRight(BorderStyle.THIN);
    headerStyle.setBorderBottom(BorderStyle.THIN);

    // 헤더 첫 번째 행 (그룹 컬럼)
    Row firstHeaderRow = sheet.createRow(0);
    String[] firstColumns = {"Personal Info", "Grade"};
    Cell personalInfoCell = firstHeaderRow.createCell(0);
    personalInfoCell.setCellValue(firstColumns[0]);
    personalInfoCell.setCellStyle(headerStyle);
    Cell gradeCell = firstHeaderRow.createCell(3);
    gradeCell.setCellValue(firstColumns[1]);
    gradeCell.setCellStyle(headerStyle);

    // 첫 번째 행의 그룹 컬럼 cell Merge
    sheet.addMergedRegion(new CellRangeAddress(0, 0, 0, 2));
    sheet.addMergedRegion(new CellRangeAddress(0, 0, 3, 5));

    // Merge된 영역의 border는 별도로 Style을 적용해줘야 함
    List<CellRangeAddress> mergedRegions = sheet.getMergedRegions();
    for (CellRangeAddress rangeAddress : mergedRegions) {
        RegionUtil.setBorderTop(BorderStyle.THIN, rangeAddress, sheet);
        RegionUtil.setBorderLeft(BorderStyle.THIN, rangeAddress, sheet);
        RegionUtil.setBorderRight(BorderStyle.THIN, rangeAddress, sheet);
        RegionUtil.setBorderBottom(BorderStyle.THIN, rangeAddress, sheet);
    }

    // 헤더 두 번째 행
    Row secondHeaderRow = sheet.createRow(1);
    String[] secondColumns = {"Name", "Age", "Gender", "English", "Korean", "Math"};
    for (int i = 0; i < secondColumns.length; i++) {
        Cell cell = secondHeaderRow.createCell(i);
        cell.setCellValue(secondColumns[i]);
        cell.setCellStyle(headerStyle);
    }

    // Body 영역 CellStyle 생성
    XSSFCellStyle bodyStyle = (XSSFCellStyle) workbook.createCellStyle();
    bodyStyle.setAlignment(HorizontalAlignment.RIGHT);
    bodyStyle.setBorderTop(BorderStyle.THIN);
    bodyStyle.setBorderLeft(BorderStyle.THIN);
    bodyStyle.setBorderRight(BorderStyle.THIN);
    bodyStyle.setBorderBottom(BorderStyle.THIN);

    // Body 영역 데이터 작성
    String[][] data = {
            {"John", "25", "Male", "90", "80", "85" },
            {"Alice", "24", "Female", "85", "90", "95" },
    };
    for (int i = 0; i < data.length; i++) {
        Row row = sheet.createRow(i + 2);
        for (int j = 0; j < data[i].length; j++) {
            Cell cell = row.createCell(j);
            cell.setCellValue(data[i][j]);
            cell.setCellStyle(bodyStyle);
        }
    }

    // 파일로 저장
    FileOutputStream fileOut = new FileOutputStream("example.xlsx");
    workbook.write(fileOut);
    fileOut.close();
    workbook.close();
} catch (IOException e) {
    e.printStackTrace();
}
```

### ⏭ After: 엑셀 모듈을 사용했을 때의 코드
* DTO를 통해 컬럼 구성을 정의하고 스타일을 설정할 수 있어서 컬럼의 구성을 명확히 확인할 수 있다.
* `CellStyle`을 생성 및 적용하는 코드를 작성할 필요가 없고, 그룹 헤더의 범위를 계산해서 셀을 병합하는 코드를 작성할 필요가 없다.

__🔻 DTO를 통한 컬럼 구성 및 스타일 정의__
```java
@Getter
@DefaultHeaderStyle(style = @ExcelColumnStyle(excelCellStyleClass = DefaultExcelCellStyle.class, enumName = "BLUE_HEADER"))
@DefaultBodyStyle(style = @ExcelColumnStyle(excelCellStyleClass = DefaultExcelCellStyle.class, enumName = "BODY"))
@ExcelImport()
public class ExcelSampleDto {
    @ExcelColumn(headerName = "Personal Info")
    private PersonalInfo personalInfo;
    @ExcelColumn(headerName = "Grade")
    private Grade grade;
}

@Getter
public class PersonalInfo {
    @ExcelColumn(headerName = "Name")
    private String name;
    @ExcelColumn(headerName = "Age")
    private int age;
    @ExcelColumn(headerName = "Gender")
    private String gender;
}

@Getter
public class Grade {
    @ExcelColumn(headerName = "Korean")
    private int korean;
    @ExcelColumn(headerName = "English")
    private int english;
    @ExcelColumn(headerName = "Math")
    private int math;
}
```

__🔻 엑셀 파일 생성__
```java
@PostMapping(value = "/export-excel-via-dto")
public void exportExcel(HttpServletResponse response, @RequestBody List<ExcelSampleDto> data) throws IOException {
    response.setContentType("application/vnd.ms-excel");
    ExcelFile excelFile = new OneSheetExcelFile<>(data, ExcelSampleDto.class);    
    excelFile.write(response.getOutputStream());
}
```
